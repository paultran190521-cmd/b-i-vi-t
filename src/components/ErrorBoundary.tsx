import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let isFirestoreError = false;
      let parsedError = null;
      try {
         parsedError = JSON.parse(this.state.errorMessage);
         if (parsedError.operationType) isFirestoreError = true;
      } catch (e) {}

      return (
        <div className="flex h-screen w-full items-center justify-center bg-red-50 p-6">
          <div className="max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
            <div className="bg-red-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Lỗi Hệ Thống (System Error)</h2>
            </div>
            <div className="p-6">
              {isFirestoreError ? (
                <div className="space-y-4">
                   <p className="text-slate-700">Đã xảy ra lỗi quyền truy cập hoặc hệ thống cơ sở dữ liệu. Chi tiết mã lỗi (Dành cho admin):</p>
                   <pre className="bg-slate-100 p-4 rounded-lg text-xs font-mono text-red-600 overflow-x-auto whitespace-pre-wrap">
                      {JSON.stringify(parsedError, null, 2)}
                   </pre>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-slate-700">Rất tiếc, ứng dụng vừa gặp sự cố không mong muốn.</p>
                  <pre className="bg-slate-100 p-4 rounded-lg text-xs font-mono text-red-600 overflow-x-auto">
                    {this.state.errorMessage}
                  </pre>
                </div>
              )}
              <div className="mt-6">
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition"
                >
                  Tải Lại Trang (Reload)
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
