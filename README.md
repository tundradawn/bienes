# Bienes 🧮🤖

Spanish for Assets, Bienes is intended to store general Visual assets, experiments & elements created with p5.js.




# Structure

##### Experiment
- An experiment will have it's own repo.
- An experiment will have it's own unique folder.

##### Public
- A global assets folder found in the root directory.
- Has a `master.css` for quick-and-easy styling on new experiments
- Has a `bundle.js` that contains a generic set of javascript.
  - Possibly not needed for most usecases right now.
- Common visual assets many experiments could benefit from.

Bottom line? If more then one experiment will use the asset: put it in the public file. _Let's try not to change the public contents unnecessarly to avoid breaking experiments_

##### index.html
Something that will navigate us to each experiment.



# Example:
```
.
├── box-shader              [Experiment]
│   ├── assets              [Experiment specific assets]
│   │   ├── css
│   │   │   └── style.css
│   │   └── js
│   │       └── main.js  
│   └── index.html          [Experiment entry point]
├── index.html              
├── public                  [public assets multiple experiments use]
│   ├── css
│   │   └── master.css   
│   └── js
│       └── main.js      
└── triangles-spinning      [Experiment]
    ├── assets              [Experiment specific assets]
    │   ├── css
    │   │   └── style.css
    │   └── js
    │       └── main.js
    └── index.html          [Experiment entry point]

11 directories, 9 files
```
