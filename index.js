const express = require("express");
// const mongoose = require("mongoose");
//const mainroutes = require("./routes/mainroutes");
//const fs = require("fs/promises");
//const createCsvWriter = require("csv-writer").createArrayCsvWriter;
// const profileroutes = require("./routes/profileroutes");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const session = require("express-session");
// const passport = require("passport");
// const flash = require("connect-flash");
// dotenv.config();

const app = express();
const hostname = "0.0.0.0";
const port = 80;
app.set("view engine", "ejs");

app.use(express.static("public"));
// app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.set("trust proxy", 1);
// app.use(
//   session({
//     secret: "secretcode1",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false,
//       maxAge: 1000 * 60 * 60 * 24, // One Week
//     },
//   })
// );
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(mainroutes);

// app.use(profileroutes);

// ${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}
// try {
//   mongoose.connect(
//     `mongodb+srv://armaan:key2948@cluster0.giwib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => {
//       console.log(`Connected to the DATABASE`);
//     }
//   );
// } catch (error) {
//   console.log(`Could not connect to the DB because ${error}`);
// }

const puppeteer = require("puppeteer");
const { json } = require("body-parser");


const urls = [
  "https://google.qwiklabs.com/public_profiles/a13186ba-7fef-45ad-a539-cbf589475fa8",
  "https://google.qwiklabs.com/public_profiles/8b44dc79-6547-4be9-90f6-21a770e42550",
  "https://www.qwiklabs.com/public_profiles/5ff2c506-64ea-4bc8-b48f-59cfc4152736",	
  "https://google.qwiklabs.com/public_profiles/1b2f781e-5edc-485f-8fe7-1f63735588d2",
  "https://www.qwiklabs.com/public_profiles/a1ddeab9-cf20-4b87-b7ea-10b00931f147",
	"https://www.qwiklabs.com/public_profiles/0e78b587-e356-41db-9e81-40ff928d89ce",
"https://cloudvietnam18.wordpress.com/2020/09/13/answer-qwiklabs-set-up-and-configure-a-cloud-environment-in-google-cloud-challenge-lab/",
"https://www.qwiklabs.com/public_profiles/d893d750-74a9-490e-9238-1e44d3f25efa",
"https://www.qwiklabs.com/public_profiles/3374741a-894e-447c-bdc0-d12a6a58dfbd",
"https://www.qwiklabs.com/public_profiles/8c9e8ad0-b7f9-4ec6-96fd-ed93d41c109a",
"https://www.qwiklabs.com/public_profiles/d4d6afdd-cee1-4046-877b-ea78d360e2d7",
"https://www.qwiklabs.com/public_profiles/7bf78c93-a76a-4e56-9869-0826c9d378f8",
"https://www.qwiklabs.com/public_profiles/fbd8bf61-38ce-4838-afcb-84762e502a13",
"https://www.qwiklabs.com/public_profiles/92218ea2-06de-4088-9454-27f9c69ec384",
"https://google.qwiklabs.com/public_profiles/6c381081-d5a8-41b3-9c85-465c2c762af8",
"https://www.qwiklabs.com/public_profiles/e2803329-af3f-46fa-9019-296072bdd49a",
"https://www.qwiklabs.com/public_profiles/80d72ace-05d5-49aa-83ad-d3a1f0906edd",
"https://www.qwiklabs.com/public_profiles/b7387f5f-e9bb-4ba8-b158-b532bd63b0ba",
"https://www.qwiklabs.com/public_profiles/79d90187-69c2-45d7-a187-af5514177736",
"https://www.qwiklabs.com/public_profiles/06bbeafd-5e4d-4152-bf26-4e609cb16ca3",
"https://www.qwiklabs.com/public_profiles/cb51e611-35ee-40c1-83db-094e32d389cb",
"https://www.qwiklabs.com/public_profiles/6d07c154-8edc-4ee8-9e0c-574c8436b6a3",
"https://www.qwiklabs.com/public_profiles/0b7de455-f38e-4707-8442-a08c468701d9",
"https://google.qwiklabs.com/public_profiles/f6711e52-8788-42c3-9765-4a2420e7f11c",
"https://google.qwiklabs.com/public_profiles/65d178a9-3839-4adf-8e6b-8298ef604597",
"https://www.qwiklabs.com/public_profiles/16d0ad19-5a13-4818-b1e1-a5c652943e81",
"https://www.qwiklabs.com/public_profiles/e5ada539-951a-4857-9c36-ad5f71c221fe",
"https://www.qwiklabs.com/public_profiles/a59503cc-6e1f-4e88-aa5d-a2c19353b52b",
"https://www.qwiklabs.com/public_profiles/02474673-d9ae-4a9f-a5cd-c7ebc1f29d7c",
"https://www.qwiklabs.com/public_profiles/488cf46a-cf6a-44e4-b18c-3f2503b2a8d8",
"https://www.qwiklabs.com/public_profiles/d18a9b25-4ebd-4f74-b0e1-f22bf5012d19",
"https://www.qwiklabs.com/public_profiles/c41e67ab-c1f7-46da-be8a-7a5f0f0ee841",
"https://run.qwiklabs.com/public_profiles/4496b4ad-e9cb-4a46-bf11-f020ac9d191a",
"https://run.qwiklabs.com/public_profiles/b8605ff0-2c45-46cf-813f-59ec70fb46b8",
"https://google.qwiklabs.com/public_profiles/14b52cea-056b-4c75-b818-59e0c4ed8e9a",
"https://google.qwiklabs.com/public_profiles/a3d7390c-ea73-4d2a-aa22-327bffb177f3",
"https://www.qwiklabs.com/public_profiles/97db53ba-203e-4b3e-8739-dcaeae0cacc2",
"https://google.qwiklabs.com/public_profiles/5b3b2ca8-5432-498a-b556-3f7b34203c91",
"https://www.qwiklabs.com/public_profiles/640d9acd-632d-4672-83b1-e1bbaa3dde4b",
"https://www.qwiklabs.com/public_profiles/1ae8b503-950d-4208-accf-c74081d13065",
"https://www.qwiklabs.com/public_profiles/c9a7582e-9ca1-4534-a644-0efdca1e4557",
"https://google.qwiklabs.com/public_profiles/f8d3b168-356f-489c-82d5-a2abde867eb3",
"https://google.qwiklabs.com/public_profiles/a45d8c32-4972-4c11-a2c4-178a2eb37e15",
"https://google.qwiklabs.com/public_profiles/6cf31ba8-1ad3-40fb-9301-3723142dbfc6",
"https://www.qwiklabs.com/public_profiles/c878d175-3fa9-4c84-b4a7-e8e5db5669c4",
"https://google.qwiklabs.com/public_profiles/ed62e32b-6a95-4139-90bd-abaadfe1d78e",
"https://google.qwiklabs.com/public_profiles/424838c8-1975-43d3-80f4-a4b250e05345",
"https://google.qwiklabs.com/public_profiles/42f01690-6735-4cda-8452-ca1b1afd7a0e",
"https://www.qwiklabs.com/public_profiles/eb3d9829-7a05-4669-87af-fdcf2ae22667",
"https://google.qwiklabs.com/public_profiles/42f01690-6735-4cda-8452-ca1b1afd7a0e",
"https://www.qwiklabs.com/public_profiles/f6890429-350f-472a-82f4-14fb12a72140",
"https://www.qwiklabs.com/public_profiles/919ccd40-e47d-49b7-8751-d1386c7d88a2",
"https://google.qwiklabs.com/public_profiles/42f01690-6735-4cda-8452-ca1b1afd7a0e",
"https://www.qwiklabs.com/public_profiles/b412f5c5-d0af-4c64-971d-5e66caabc1e4",
"https://google.qwiklabs.com/public_profiles/f45bd3cb-0f22-4744-8b4f-4a69d441486e",
"https://www.qwiklabs.com/public_profiles/60c66534-c4fa-4dc2-ab13-1ab921dbe8dd",
"https://www.qwiklabs.com/public_profiles/1b1fbffb-0fc0-49db-8d2a-a6650df85367",
"https://run.qwiklabs.com/public_profiles/ed3b46a7-c398-415b-97ac-38dba26c1f2c",
"https://www.qwiklabs.com/public_profiles/f51f7812-6f6b-4372-8208-54a090cb1d09",
"https://www.qwiklabs.com/public_profiles/dd2a09d3-6a1e-4662-b9f7-c538a2356a5b",
"https://google.qwiklabs.com/public_profiles/e550d5bf-b5e9-4eb8-aeb9-8b97d895e164",
"https://www.qwiklabs.com/public_profiles/88be5640-f016-461a-b9bb-7ffe973469d8",
"https://www.qwiklabs.com/public_profiles/9b721566-597f-4e3d-a3e1-c9accaa85c4c",
"https://www.qwiklabs.com/public_profiles/dde19d27-cc8a-4f09-9b9a-2114f75358e2",
"https://google.qwiklabs.com/public_profiles/37d4eb7d-2178-4825-a974-f8acf22903de?qlcampaign=EDUCR-30-DAYS-IN%3A%3Av9TwT5p6EZL90uYiBzUEVg",
"https://www.qwiklabs.com/public_profiles/f93ccea7-59ef-4d03-b069-a8a31b41acb8",
"https://www.qwiklabs.com/public_profiles/8c7a538a-60f2-44c8-8718-c86ff201d330 ",
"https://google.qwiklabs.com/public_profiles/49abf6f5-2a77-4f69-98d4-0fca1306ef10",
"https://www.qwiklabs.com/public_profiles/6dc2ac9c-19b6-499a-a1ae-c50e2e967c6d",
"https://www.qwiklabs.com/public_profiles/e5332c12-74c8-45db-81e9-06140e4e01d0",
"https://google.qwiklabs.com/public_profiles/6dfbf8b1-910b-411d-94d9-11bb202e2bac",
"https://www.qwiklabs.com/public_profiles/422b23bf-8b34-4d2c-ba34-4d41f0c7abc2",
"https://www.qwiklabs.com/public_profiles/a926b820-f59f-44a6-acb5-39b8c4265458",
"https://www.qwiklabs.com/public_profiles/eb3bc0bc-8549-4f86-afa9-01bbae5a97de",
"https://run.qwiklabs.com/public_profiles/ea21034b-3d40-4b33-8342-d8780c38799c",
"https://www.qwiklabs.com/public_profiles/9c140585-f82b-4592-9c25-7c52a01a806f",
"https://google.qwiklabs.com/public_profiles/5d22fc38-3f42-4e0e-bd30-410706b8443e",
"https://www.qwiklabs.com/public_profiles/eccad4d8-ed1d-4ebb-a264-5da3e52df864",
"https://google.qwiklabs.com/public_profiles/5988f5b6-6fbb-4238-b270-a9e8a106fd9f?qlcampaign=GSP282",
"https://google.qwiklabs.com/public_profiles/1b2f781e-5edc-485f-8fe7-1f63735588d2",
"https://google.qwiklabs.com/public_profiles/d2747904-a30b-4d5a-8ece-dc8854dd5030",
"https://google.qwiklabs.com/public_profiles/afcab796-ff31-4537-8511-834778192345",
"https://www.qwiklabs.com/public_profiles/f4420df8-fb99-494a-9f07-3a94e2ff1f6d",
"https://www.qwiklabs.com/public_profiles/f4420df8-fb99-494a-9f07-3a94e2ff1f6d",
"https://www.qwiklabs.com/public_profiles/5278f12e-b087-4174-ada3-c26922b53b2f",
"https://www.qwiklabs.com/public_profiles/c864f4eb-1d7b-4803-b83b-d8dc6feccaf4",
"https://www.qwiklabs.com/public_profiles/32275972-c319-4dd3-a46f-8a3291cb4523",
"https://run.qwiklabs.com/public_profiles/976a98e3-a043-4b3a-a488-fdd339438610",
"https://run.qwiklabs.com/public_profiles/d617dd2f-be9a-4544-a668-be3b55565630",
"https://google.qwiklabs.com/public_profiles/d6459b8d-14ab-4921-88a4-48510e74d796",
"https://www.qwiklabs.com/public_profiles/ee5543c2-cc0c-4c07-9135-cd3a2684e3eb",
"https://www.qwiklabs.com/public_profiles/590ba210-8983-40d1-9748-9d8711c2ad7e",
"https://www.qwiklabs.com/public_profiles/2bfd3931-76bc-418b-8a1e-2027d6d2774d",
"https://www.qwiklabs.com/public_profiles/67b72980-19b6-4922-8c09-08b0b543cfdb",
"https://www.qwiklabs.com/public_profiles/f28f1466-68e4-46d4-a9c0-f37c84a4d4e7",
"https://www.qwiklabs.com/public_profiles/fae94b8d-566b-4f1e-8a7e-12f401ca325c",
"https://www.qwiklabs.com/public_profiles/5cca70b5-d907-49cb-b2bf-b76c0ff4ad4b",
"https://google.qwiklabs.com/public_profiles/fa42861f-47c2-4f6c-b054-a262034f9665",
"https://www.qwiklabs.com/public_profiles/7f9569be-d59c-4669-939c-ebb93da09cfb",
"https://google.qwiklabs.com/public_profiles/44446585-2dce-45b5-a13b-4288f930f5d2",
"https://www.qwiklabs.com/public_profiles/de7b60b1-bddd-4b9b-94f7-ab75f8372dfc",
"https://www.qwiklabs.com/public_profiles/0b7de455-f38e-4707-8442-a08c468701d9",
"https://run.qwiklabs.com/public_profiles/45a7e30c-d9f0-45fb-9cfd-b3d4a9571d97"
];

var finalobj = {};

async function startbrowser() {
//  const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'] });

  const page = await browser.newPage();
  let i = 0;
  pagesurfer(browser, page, i, finalobj);
}

//   await browser.close();
async function pagesurfer(browser, page, i, finalobj) {
  if (i == urls.length) {
    browser
      .close()
      .then((response) => {
        console.log("Browser Session Closed", finalobj);
      })
      .catch((response) => console.log("Error closing"));
    return;
  }
  console.log(urls[i]);
  page
    .goto(urls[i])
    .then((response) => {
      let names = [];
      page
        .$$eval(
          "body > ql-drawer-container > ql-drawer-content > main > div > h1",
          (name) => {
            wrappedname = name.map((x) => x.innerHTML.trim());
            return wrappedname[0];
          }
        )
        .then((response) => {
          //   username = JSON.stringify(response);
          username = response;
          console.log(username);
          page
            .$$eval(
              "body > ql-drawer-container > ql-drawer-content > main > div > div > div > span.ql-subhead-1.l-mts",
              (names) => {
                return names.map((x) => x.innerHTML.trim());
              }
            )
            .then((result) => {
              names = JSON.stringify(result);
              //   names = result;
              console.log(names);
       
	
		  page .$$eval(
                  "body > ql-drawer-container > ql-drawer-content > main > div > div > div:nth-child(1) > span.ql-body-2.l-mbs",
                  (name) => {
                    wrappedname = name.map((x) => x.innerHTML.trim());
                    return wrappedname[0];
                  }
                )
                .then((result) => {
                  date = JSON.stringify(result);
                  //   names = result;
                  console.log(date);

                  finalobj[i] = { Name: username, Quests: names, Date: date };
                  pagesurfer(browser, page, i + 1, finalobj);
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log("Couldn't get name"));
    })
    .catch((err) => console.log("Couldn't open page err"));
}

// setInterval(function () {
//   startbrowser();
// }, 360000);
startbrowser();
// 6 minutes

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/30days/leaderboard", (req, res, next) => {
console.log("request recieved");	
  res.send({"obj" :finalobj});
});

app.listen(port || process.env.PORT);

//   await page.screenshot({ path: "quik.png", fullPage: true });

//   const names = await page.evaluate(() => {
//     return Array.from(
//       document.querySelectorAll(
//         "body > ql-drawer-container > ql-drawer-content > main > div > div > div > span.ql-subhead-1.l-mts"
//       )
//     ).map((x) => x.textContent);
//   });

//     const forLoop = async _ => {
//     console.log('Start')

//     for (let index = 0; index < fruitsToGet.length; index++) {
//       const fruit = fruitsToGet[index]
//       const numFruit = await getNumFruit(fruit)
//       console.log(numFruit)
//     }

//     console.log('End')
//   }

//   try {
//     await page.goto(profileurl);
//   } catch {
//     console.log("ERR 1");
//   }

