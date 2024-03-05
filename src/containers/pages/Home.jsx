import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/home/Header"

function Home(){
    return(
        <Layout>
            <Navbar/>
                <Header/>
            <Footer/>
        </Layout>
    )
}
export default Home