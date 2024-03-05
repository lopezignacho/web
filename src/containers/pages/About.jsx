import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"

function About(){
    return(
        <Layout>
            <Navbar/>
            About
            <Footer/>
        </Layout>
    )
}
export default About