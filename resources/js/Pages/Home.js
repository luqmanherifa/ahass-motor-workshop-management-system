import React from "react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";
import HomeHero from "@/Layouts/HomeHero";
import HomePromo from "@/Layouts/Home/Promo/HomePromo";
import HomeArtikel from "@/Layouts/Home/Artikel/HomeArtikel";
import HomeJasa from "@/Layouts/Home/Jasa/HomeJasa";
import HomeSukuCadang from "@/Layouts/Home/SukuCadang/HomeSukuCadang";
import HomeGaleri from "@/Layouts/HomeGaleri";
import HomeLokasi from "@/Layouts/HomeLokasi";
import HomeKontak from "@/Layouts/HomeKontak";

const Pages = ({ auth }) => {
    return (
        <div>
            <Navbar auth={auth} />
            <HomeHero />
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
