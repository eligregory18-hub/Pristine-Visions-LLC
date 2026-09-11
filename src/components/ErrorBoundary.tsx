import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Unexpected component error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="panel rounded-sm p-8 text-center">
            <h3 className="text-3xl">This section is temporarily unavailable</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Please refresh the page or call (320) 200-9941 for help.
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
