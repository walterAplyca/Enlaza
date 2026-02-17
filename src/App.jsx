import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
    <Layout currentPageName={currentPageName}>{children}</Layout>
    : <>{children}</>;

const AuthenticatedApp = () => {

    // Render the main app
    return (
        <Routes>
            <Route path="/" element={
                <LayoutWrapper currentPageName={mainPageKey}>
                    <MainPage />
                </LayoutWrapper>
            } />
            {Object.entries(Pages).map(([path, Page]) => (
                <Route
                    key={path}
                    path={`/${path}`}
                    element={
                        <LayoutWrapper currentPageName={path}>
                            <Page />
                        </LayoutWrapper>
                    }
                />
            ))}

        </Routes>
    );
};


function App() {

    return (

        <QueryClientProvider client={queryClientInstance}>
            <Router>
                <NavigationTracker />
                <AuthenticatedApp />
            </Router>
            <Toaster />
        </QueryClientProvider>
    )
}

export default App
