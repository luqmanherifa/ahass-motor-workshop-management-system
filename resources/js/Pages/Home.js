import Footer from "@/Layouts/Home/Footer";
import HomeArtikel from "@/Layouts/Home/Artikel/HomeArtikel";
import HomeJasa from "@/Layouts/Home/Jasa/HomeJasa";
import HomePromo from "@/Layouts/Home/Promo/HomePromo";
import HomeSukuCadang from "@/Layouts/Home/SukuCadang/HomeSukuCadang";
import HomeGaleri from "@/Layouts/Home/HomeGaleri";
import HomeHero from "@/Layouts/Home/HomeHero";
import HomeKontak from "@/Layouts/Home/HomeKontak";
import HomeLokasi from "@/Layouts/Home/HomeLokasi";
import Navbar from "@/Layouts/Home/Navbar";
import React from "react";

const Pages = ({ auth }) => {
    return (
        <div>
            <Navbar auth={auth} />
            <HomeHero auth={auth} />
            <HomePromo />
            <HomeArtikel />
            <HomeJasa />
            <HomeSukuCadang />
            <HomeGaleri />
            <HomeLokasi />
            <HomeKontak />
            <Footer />
        </div>
    );
};

export default Pages;
