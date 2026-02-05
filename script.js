let currentHouse = "";

// Uy ochish
function openHouse(house) {
    currentHouse = house;

    document.getElementById("houses").classList.add("hidden");
    document.getElementById("services").classList.remove("hidden");

    document.getElementById("houseTitle").innerText =
        house === "beltepa" ? "🏠 Bel-Tepa" : "🏠 Oxunboboyev";
}

// Orqaga (uy tanlashga)
function goBack() {
    document.getElementById("services").classList.add("hidden");
    document.getElementById("houses").classList.remove("hidden");
}

// Ma'lumotlar
function showInfo(type) {
    document.getElementById("services").classList.add("hidden");
    document.getElementById("info").classList.remove("hidden");

let data = {
    beltepa: {
        wifi: `
            <b>WiFi nomi:</b> Beltepa_Net<br>
            <b>Shartnoma egasi:</b>Muradov Mansurjan Nasirovich<br>
            <b>Login:</b>m615538<br>
            <b>Hisob raqam(pul tashashga):</b> 1942441724
        `,

        gaz: `
            <b>Gaz hisob raqam:</b>....<br>
            <b>Egasi:</b> 
        `,

        suv: `
            <b>Issiq suv:</b>...<br>
            <b>Hisob raqam:</b> ....
        `,
        kadaster: `
            <b>Kadastr raqam:</b> 77:88:999<br>
            <b>Maydoni:</b> 60 m²
        `,
        propiska: `
            <b>Kadastr raqam:</b><br>
            <b>Maydoni:</b> 60 m²
         `
    },
    oxunboboyev: {
        wifi: `
            <b>WiFi nomi:</b> Oxun_Net<br>
            <b>Egasi:</b> Ismingiz
            `,

        gaz: `
            <b>Gaz hisob raqam:  </b> 1008018628
            `,

        suvissiq: `
            <b>Issiq suv:</b>
            `,

        suvsocuq: `
            <b>Sovuq suv:  </b>2628050464
            `,
            
        kadaster: `
            <b>Kadastr:  </b>10:08:01:01:01:5405
             `,
        propiska: `
            <b>Propiska:  </b>10:08:01:01:01:5405<br>
            <b>Maydoni:</b> 262.19 m²
             `,
         musor: `
            <b>Musor:  </b>10:08:01:01:01:5405<br>
            <b>Maydoni:</b> 262.19 m²
             `
        }
    };

    document.getElementById("infoContent").innerHTML =
        data[currentHouse][type];
}

// Ma'lumotdan chiqish
function closeInfo() {
    document.getElementById("info").classList.add("hidden");
    document.getElementById("services").classList.remove("hidden");
}
