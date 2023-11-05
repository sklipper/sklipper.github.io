const siteUrl = process.env.SITE_URL;
const data = {
  site: {
    name: "Sklipper Software",
    url: siteUrl,
    /**
     * @see https://www.npmjs.com/package/next-seo
     */
    og: {
      image1: {
        url: `${siteUrl}/og-image.png`,
        width: 460,
        height: 460,
        alt: "Sklipper Software",
      },
    }
  },
  sklipper: {
    location: "Rasht, Iran",
    github: "https://github.com/sklipper",
    linkedin: "https://linkedin.com/company/sklipper"
  },
  mirbostani: {
    slug: "mirbostani",
    firstname: "Seyed Morteza",
    lastname: "Mirbostani",
    fullname: "Seyed Morteza Mirbostani",
    title: "Full Stack Software Engineer",
    location: "Rasht, Iran",
    image: "/mirbostani/image.jpeg",
    thumb: "",
    avatar: "",
    twitter_handle: "@mirbostani",
    twitter: "https://twitter.com/mirbostani",
    github: "https://github.com/mirbostani",
    linkedin: "https://linkedin.com/in/mirbostani",
    // medium: "https://medium.com/@m.mirbostani",
  },
  mahjoob: {
    slug: "mahjoob",
    firstname: "Mohammad Javad",
    lastname: "Mahjoob",
    fullname: "Mohammad Javad Mahjoob",
    title: "CEO",
    location: "Rasht, Iran",
    image: "/mahjoob/image.jpeg",
    thumb: "",
    avatar: "",
    twitter_handle: "",
    twitter: "",
    github: "",
    linkedin: "https://www.linkedin.com/in/mohammad-javad-mahjoob-4926a594/"
  },
  nouri: {
    slug: "nouri",
    firstname: "Souna",
    lastname: "Nouri",
    fullname: "Souna Nouri",
    title: "Art Director",
    location: "Rasht, Iran",
    image: "/nouri/image.jpeg",
    thumb: "",
    avatar: "",
    twitter_handle: "",
    twitter: "",
    github: "",
    linkedin: "https://www.linkedin.com/in/souna-nouri/"
  },
  majidsabet: {
    slug: "majidsabet",
    firstname: "Majid",
    lastname: "Sabet",
    fullname: "Dr. Majid Sabet",
    title: "Data Scientist",
    location: "Rasht, Iran",
    image: "/majidsabet/image.jpeg",
    thumb: "",
    avatar: "",
    twitter_handle: "",
    twitter: "",
    github: "",
    linkedin: "https://www.linkedin.com/in/majid-sabet-377b3748/"
  },
  solmaznouri: {
    slug: "solmaznouri",
    firstname: "Solmaz",
    lastname: "Nouri",
    fullname: "Dr. Solmaz Nouri",
    title: "Data Scientist",
    location: "Rasht, Iran",
    image: "/solmaznouri/image.jpeg",
    thumb: "",
    avatar: "",
    twitter_handle: "",
    twitter: "",
    github: "",
    linkedin: "https://www.linkedin.com/in/solmaz-nouri-819bb2b1/"
  },
  urls: {
    guilan_uni: "https://guilan.ac.ir/en/home",
    guilan_uni_nlp: "https://nlp.guilan.ac.ir/",
  },
};

module.exports = data;
