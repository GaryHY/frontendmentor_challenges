let data = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": [
            "Python"
        ],
        "tools": [
            "React"
        ]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": [
            "JavaScript"
        ],
        "tools": [
            "React",
            "Sass"
        ]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": [
            "CSS",
            "JavaScript"
        ],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": [
            "JavaScript"
        ],
        "tools": [
            "Ruby",
            "Sass"
        ]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": [
            "Ruby"
        ],
        "tools": [
            "RoR"
        ]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": [
            "HTML",
            "JavaScript"
        ],
        "tools": [
            "Sass"
        ]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": [
            "JavaScript"
        ],
        "tools": [
            "Vue",
            "Sass"
        ]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": [
            "JavaScript",
            "Python"
        ],
        "tools": [
            "Django"
        ]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": [
            "JavaScript"
        ],
        "tools": [
            "React",
            "Sass"
        ]
    }
]

let language_filter = new Set();
let tool_filter = new Set();
let role_filter = new Set();
let level_filter = new Set();

// Je pourrais le hard coder pour cet exemple mais flemme
for (let job of data) {
    job.languages.map(language => language_filter.add(language))
    job.tools.map(tool => tool_filter.add(tool))
    level_filter.add(job.level);
    role_filter.add(job.role);
}

// Variables
let filterTags = [];

const buildCard = (card_data) => {
    return `
        <div class="card flex-group">
            <div class="flex-group">
                <img src=${card_data.logo} alt="">
                <div class="flex-group job-content" data-direction="column">
                    <div class="flex-group">
                        <p class="company">${card_data.company}</p>
                        ${card_data.new ? `<p class="new">New!</p>` : `<p></p>`}
                        ${card_data.featured ? `<p class="featured">Featured</p>` : `<p></p>`}
                    </div>
                    <p class="job-title">${card_data.position}</p>
                    <div class="job-info flex-group"> <p class="job-details-item">${card_data.postedAt}</p>
                        <p class="job-details-item">${card_data.contract}</p>
                        <p class="job-details-item">${card_data.location}</p>
                    </div>
                </div>
            </div>
            <ul role="list" class="tags flex-group">
                <li class="tag">${card_data.role}</li>
                <li class="tag">${card_data.level}</li>
                ${card_data.languages.map(language => {
                   return `<li class="tag">${language}</li>`
                }).join('')}
                ${card_data.tools.map(tool => {
                    return `<li class="tag">${tool}</li>`
                }).join('')}
            </ul>
        </div>
`
}

// Une fonction pour trouver l'intersection de mes 4 arrays
const findIntersection = (arr1, arr2, arr3, arr4) => {
    let sum = [...arr1, ...arr2, ...arr3, ...arr4];
    const elementCount = sum.reduce((count, element) => {
        count[element.id] = (count[element.id] || 0) + 1;
        return count;
    }, {});

    const intersection = Object.keys(elementCount).filter(element => elementCount[element] === 4);
    return searchJobById(intersection);
}

// Juste pour cet exercice et pour me simplifier la vie je vais supposer que les jobs sont ranges par id croissant
const searchJobById = (list_id) => {
    return list_id.map(id => data[Number(id)-1]); 
}

// Filters ce sont la liste de tous les filters applique
const getListFiltered = (filters) => {
    language_filter = Array.from(language_filter);
    tool_filter = Array.from(tool_filter);
    role_filter = Array.from(role_filter);
    level_filter = Array.from(level_filter);
    const filter_lang = language_filter.filter(tag => filters.includes(tag)); 
    const filter_tool = tool_filter.filter(tag => filters.includes(tag)); 
    const filter_role = role_filter.filter(tag => filters.includes(tag));
    const filter_level = level_filter.filter(tag => filters.includes(tag)); 

    let job_by_language = filter_lang.length ? data.filter(job => {
        let ans = filter_lang.map(lang => job.languages.includes(lang));
        return ans.reduce((prev, curr) => prev && curr);
    }) : data; 

    let job_by_tool = filter_tool.length ? data.filter(job => {
            let ans = filter_tool.map(tool => job.tools.includes(tool));
            return ans.reduce((prev, curr) => prev && curr);
    }) : data; 

    let job_by_role = filter_role.length ? data.filter(job => job.role === filter_role[0]) : data; 
    let job_by_level = filter_level.length ? data.filter(job => job.level === filter_level[0]) : data; 
    return findIntersection(job_by_role, job_by_level, job_by_tool, job_by_language);
}

// Une fonction pour mettre tous les listeners de click
const handleClick = () => {
    let tags = document.querySelectorAll(".tag");
    let clearButton = document.querySelector(".clear-button");
    let removeFilter = document.querySelectorAll(".filter-tag");

    clearButton.addEventListener("click", () => {
        clearFilter();
    })
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            addFilter(tag.innerText);
        })
    })
    removeFilter.forEach(tag => {
        tag.addEventListener("click", () => {
            removeFilter(tag.innerText);
        })
    })
}

/// Une fonction pour manipuler le DOM lorsque la variable filterTags change
const handleChangeFilterTag = (filterTagsCopy) => {
    if (filterTagsCopy !== filterTags) {
        if (!filterTagsCopy.length) {
            init_page();
        } else {
            filterTags = filterTagsCopy;
            console.log("lesfiltres dispos sont: ", filterTags);
            let data_jobs = getListFiltered(filterTags);
            let cards = data_jobs.map(job => buildCard(job)); 
            document.querySelector(".container").innerHTML = cards;
        }
        handleClick();
    } else {
        console.log("Je ne modifie rien mais je ne dois pas me retrouver dans ce cas");
    }
}

const clearFilter = () => {
    let filterTagsCopy = Array.from(filterTags);
    filterTagsCopy = [];
    document.querySelector(".filter-list").innerHTML = `` ;
    handleChangeFilterTag(filterTagsCopy);
}

const addFilter = (filter) => {
    if (filterTags.includes(filter)){
        // TODO: Rajouter un element visuel pour que l'on puisse voir que cette operation n'entraine aucune action
        console.log("On ne va pas ajouter ce filtre car il est deja present en fait");
    } else {
        let filterTagsCopy = Array.from(filterTags);
        filterTagsCopy.push(filter);
        document.querySelector(".filter-list").innerHTML += ` <li class="filter-tag">${filter}</li> ` ;
        handleChangeFilterTag(filterTagsCopy);
    }
}

const removeFilter = (filter) => {
    let filterTagsCopy = Array.from(filterTags);
    for (let i = 0; i < filterTagsCopy.length; i++){
       if(filterTagsCopy[i] === filter) {
            filterTagsCopy.splice(i,1);
        }
    }
    document.querySelector(".filter-list").innerHTML = `<li class="filter-tag"></li>` ;
    filterTagsCopy.map(filter => {
        document.querySelector(".filter-list").innerHTML += ` <li class="filter-tag">${filter}</li> ` ;

    })
    handleChangeFilterTag(filterTagsCopy);
}

const init_page = () => {
    let init_cards = data.map(job => buildCard(job));
    document.querySelector(".container").innerHTML = init_cards;
}

// Une fonction pour toggle une classe, je l'utilise pour pouvoir rendre visible certains elements a certains moments
const toggleClass = (el, className) => {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
        return;
    }
    el.classList.add(className);
}

init_page();
handleClick();

