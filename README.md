# Introduction

# Getting Started

# Build and Test

# Writing commits
When commiting the message should be in the following format: <type> <summary>
<type> is what kind of change that was made, ie, 
   docs: Documentation only changes
   feat: A new feature
   fix: A bug fix
   refactor: A code change that neither fixes a bug nor adds a feature
   test: Adding missing tests or correcting existing tests
   other: if the change doesn’t fit the ones above
<summary> should be a short summary of what changes were done. Don't capitalize the first letter. No dot (.) at the end
<link> The last sentance should link the commit to the workitem it corresponds with in azure DevOps. 
   Regular link to work item: include AB#{Id}
   Done with work item: include [fix, fixes, fixed] AB#{Id}. This should preferably be included in pull requests when a should be merged.\




## Öppna miljön första gången

1. Installera python venv

2. `python3 -m venv .venv`

3. Linux/Git Bash: `source .venv/bin/activate`\
   Windows/Powershell: `.venv/Scripts/activate`

4. Installera python dependencies `python3 -m pip install -r requirements.txt`

5. Starta django-server i cama\_backend `python3 manage.py runserver`

6. Starta frontend i cama\_frontend i dev mode `npm start` 
