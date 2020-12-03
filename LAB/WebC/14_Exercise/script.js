let profiles = [
    {
        id: "kriengkrai",
        lect: "Asst.Prof.Kriengkrai Porkaew",
        img: "./imgs/AjKK.jpg",
        academic: [
            "M.Sc. & Ph.D. (Computer Science) the Department of Computer Science, the University of Illinois at Urbana-Champaign, USA",
            "B.Sc. (Computer Science) the Department of Computer Science, Ramkhamhaeng University, Thailand",
            "B.Sc. (Medical Science) the Faculty of Medicine - Siriraj Hospital, Mahidol University, Thailand"
        ],
        teaching: ["Bioinformatics: Biological Sequence Analysis",
            "DB: DBMS, DB Technology, DB Design, Multimedia IR",
            "PL: Java, Perl, Programming Language Concepts",
            "SE: Design Patterns, Web Application Development"
        ]
    },

    {
        id: "pichet",
        lect: "Lect. Pichet Limvajiranan",
        img: "./imgs/AjPichet.jpg",
        academic: ["M.Sc. (Computer Science) 2542 Chulalongkorn University, Thailand",
            "B.Sc. (Computer Science) 2538 Rajabhat Institute Saundusit, Thailand"
        ],
        teaching: ["Data Structures and Algorithms",
            "Java Server Side Programming",
            "Programming Language (Visual Basic, C, Pascal, Java)",
            "Programming Syntax & Semantic"
        ]
    },

    {
        id: "sanit",
        lect: "Lect. Sanit Sirisawatvatana",
        img: "./imgs/AjSanit.jpg",
        academic: [
            "M.B.A. (Finance) 1997, University of Texas at San Antonio, U.S.A",
            "B.Engineer (Electrical) 1991, Chulalongkorn University"
        ],
        teaching: [
            "Business Intelligence",
            "Data Warehouse",
            "Web Technology",
            "Web Programming"
        ]
    },

    {
        id: "umaporn",
        lect: "Asst.Prof.Umaporn Supasitthmethee",
        img: "./imgs/AjJing.jpg",
        academic: [
            "Ph.D. Computer Science 2551, King Mongkut's University of Technology Thonburi (1-year internship at Kyoto University)",
            "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
            "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
        ],
        teaching: ["Java Programming", "Web Programming", "XML Technology"
        ]
    },

    {
        id: "tisanai",
        lect: "Mr. Tisanai Chatuporn (Learning Facilitator)",
        img: "./imgs/Tisanai.jpg",
        academic: [
            "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
            "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
        ],
        teaching: ["Java Programming", "Web Programming"
        ]
    }
];

var state = 0;
console.log(state)
console.log(profiles[state].academic)
console.log(profiles[state].academic[0])
console.log(profiles[state].lect)
console.log("DOM: ", document.querySelector(".next-btn").innerText)
let nextbtn = document.querySelector(".next-btn")
nextbtn.addEventListener("click", function () {
    if (state == profiles.length - 1) {
        state = 0
    } else {
        state = state + 1;
    }
    showTunbnmail();
    console.log(state)
    console.log(profiles[state].lect)
});
let prevbtn = document.querySelector(".prev-btn")
prevbtn.addEventListener("click", function () {
    if (state == 0) {
        state = 4
    } else {
        state = state - 1;
    }
    showTunbnmail();
    console.log(state)
    console.log(profiles[state].lect)
});
let surprisedbtn = document.querySelector(".surprised-btn")
surprisedbtn.addEventListener("click", function () {
    let rand = Math.floor((Math.random() * (profiles.length - 1)) + 1);
    state = rand
    showTunbnmail()
});

let lectsearch = document.querySelector("#lect-search")
lectsearch.addEventListener("click", function () {
    var x = document.getElementById("lect-value").value;
    for (let i in profiles) {
        if (x == profiles[i].id) {
            state = i
            showTunbnmail()
            break;
        }
    }
});
function showTunbnmail() {
    let lect = document.querySelector("#lect").innerHTML;
    document.querySelector("#lect").innerHTML = `<i>${profiles[state].lect}</i>`
    document.querySelector("#img-container").src = profiles[state].img
    let academic = document.querySelector("#academic")
    academic.innerHTML = ""
    for (let j in profiles[state].academic) {
        // console.log(profiles[state].academic[j])
        let li = document.createElement("li")
        li.innerHTML = profiles[state].academic[j]
        academic.appendChild(li)
    }
    let teaching = document.querySelector("#teaching");
    teaching.innerHTML = ""
    for (let j in profiles[state].teaching) {
        // console.log(profiles[state].teaching[j])
        let li = document.createElement("li")
        li.innerHTML = profiles[state].teaching[j]
        teaching.appendChild(li)
    }
}
//Show active current Person and move previous back to thumbnail
//Show next person
//Show previous person
//Show random person
//Search staff name


function onlyAlpha(event) {
    let letterCode = event.keyCode;
    if (letterCode > 31 && (letterCode < 48 || letterCode > 57)) return true;
    return false;
}


