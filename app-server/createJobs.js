const fs = require("fs");

const job_titles = ['Fullstack Developer', 'Frontend Developer', 'Backend Developer', 'UI Expert', 'Shark Tamer',
              'Handyman', 'DJ', 'Project Manager', 'Product Manager', 'Recepetionist', 'Web designer', 'Barista',
              'Business owner', 'Soldier', 'Film director', 'Lawyer', 'Astrologer', 'Cabinet maker', 'Magician',
              'Sculptor', 'Casual worker', 'Clairvoyant', 'Courier', 'Leaflet distributor', 'Electrician',
              'Careers advisor', 'Bodyguard', 'Cartoonist', 'Lifeguard']

const locations = ['Tel Aviv', 'New York', 'Chiang Mai', 'London', 'Bali', 'Jerusalem', 'Petah Tikva', 'Berlin']
const job_types = ['full-time', 'part-time', 'freelance', 'project']
const companies = ['Locard', 'Jokens', 'Trummy', 'Dataps', 'Bcards', 'Eztalk', 'nepaid',
             'yeswap', 'backzy', 'packzy', 'nvideo', 'Spoker', 'flebit', 'locket', 'accell', 'splier']



const all_ctgs = ['Dev', 'QA', 'Cat-Lover']
const all_kewords = ['agile', 'api', 'bug', 'Application', 'Backend', 'Browser', 'css', 'Deployment', 'Documentation', 'Domain', 'Frontend', 'Fill-stack']

const random = (max) => Math.floor(Math.random() * max)

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const jobs = []
for (let i=0; i< 100; i++) {
  const title = job_titles[random(job_titles.length)]
  const location = locations[random(locations.length)]
  const type = job_types[random(job_types.length)]
  const company = companies[random(companies.length)]

  const kewords = []
  const kewords_count = random(all_kewords.length)
  const curr_keys = shuffle(all_kewords)
  for (var j = 0; j < kewords_count; j++) {
    kewords.push(curr_keys[j])
  }


  const ctgs = []
  const ctgs_count = random(2) + 1
  if (ctgs_count === 1) {
    const idx = random(all_ctgs.length)
    ctgs.push(all_ctgs[idx])
  } else { // 2
    const idx = random(2)
    ctgs.push(all_ctgs[idx])
    ctgs.push(all_ctgs[2])
  }

  jobs.push({title, location, type, company, kewords, ctgs})
}

try {
  console.log('writing to file...')
  const file = fs.createWriteStream("./db/jobs.json");
  file.write(JSON.stringify(jobs));
  file.end();
  console.log('finished!')
} catch(e) {
  console.error('error!', e)
}


// console.log('job_titles', job_titles.length)




// def get_random_job():
//     job_title = random.choice(job_titles)
//     city = random.choice(cities)
//     company = random.choice(companies)
//     job_type = random.choice(job_types)

//     return {'title': job_title, 'city': city, 'company': company, 'jobType': job_type, 'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur, aperiam qui, consectetur assumenda libero quisquam beatae dolorem temporibus, eligendi odit labore incidunt dicta ipsa laudantium praesentium quidem voluptate quae.'}

// def get_random_jobs(amount):
//     jobs = []
//     for i in range(amount):
//         jobs.append(get_random_job())
    
//     return jobs

// random_jobs = get_random_jobs(100)

// with open('jobs.json', 'w') as json_file:
//     json.dump(random_jobs, json_file, indent=4)
