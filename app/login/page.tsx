import PageLog from './page.log';

export const metadata = {
    title: "Login",
    description: "Pagina De Logueo", 
};

export default function Page(){
    return <PageLog searchParams={{
        message: ''
    }} />
}