import React, { useEffect, useState } from "react";
import { sanitize } from 'dompurify';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../components/header/InnerHeader";
import Footer from "../../components/footer/Footer";
import { Link } from 'react-router-dom';
import Particles from "../particles/Particles";
import Helmet from "../../components/common/Helmet";

//here you can set your url to get the data from your api
const fetchUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogImgUrl = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/Article.png';
export default function Articles() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                // oups! something went wrong
                return;
            }

            const posts = await response.json();
            const slicedPosts = posts.slice(0, 30);
            setPosts(slicedPosts);

            console.log(posts);
        }
        loadPosts();
    }, [])

    const cleanTitle = (title) => {
        return title.replace(/[^a-zA-Z]/g, "");
    }

    return (
        <React.Fragment>
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            <Helmet pageTitle="Articles" />
            <div className="active-dark">

                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                    <div className="frame-layout__particles">
                        <Particles />

                    </div>
                    <div className="container blogContainer">


                        <div className="row">
                            {posts.map((post, index) => (

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                    <div className="blog blog-style--1">

                                        <div className="thumbnail">
                                            <img className="w-100" src={blogImgUrl} alt="Blog Images" />
                                            <Link to={{
                                                pathname: '/articles/' + (post.title)}}>

                                                <div className="content blog-display-content">
                                                    <p className="blogtype author-glitched"
                                                        data-text={post.id}>
                                                            {post.id}</p>
                                                    <h2 data-text={post.title} className="elsowinyBlog"
                                                        dangerouslySetInnerHTML={{ __html: sanitize(post.title) }} />

                                                    <div className="blog-btn">
                                                        <span className="rn-btn text-white" href={"/articles" + post.title}>Read More</span>
                                                    </div>

                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>
                </div>
                {/* End Blog Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />
            </div>
        </React.Fragment>
    )
}

