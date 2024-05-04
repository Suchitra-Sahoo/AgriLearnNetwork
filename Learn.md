# Contributing to AgriLearnNetwork

First of all thanks for taking time to contribute!

The following is a set of guidelines for contributing to firstspot.

### Table Of Contents
1. [Code of Conduct](#code-of-conduct)
2. [Ways to Contribute](#ways-to-contribute)
3. [How to Contribute](#how-to-contribute)
4. [Submitting Pull Requests](#submitting-pull-requests)


## Code of Conduct
This project and everyone participating in it is governed by the [AgriLearnNetwork Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to Contribute

### Code Contributions

- **Fix Bugs:** Identify and fix bugs by submitting pull requests with code changes.
- **Add Features:** Contribute new features or enhancements to improve the project.
- **Optimize Code:** Optimize existing code for better performance or readability.

### Documentation

- **Update Documentation:** Improve and update project documentation, including README files, guides, and inline code comments.

### Issue Reporting

- **Bug Reporting:** Report bugs by creating clear and reproducible bug reports.
- **Feature Requests:** Share ideas and request new features by opening well-documented issues.


## How to Contribute

### 1. Explore existing [Issues](https://github.com/Suchitra-Sahoo/AgriLearnNetwork/issues) or [create a new issue](https://github.com/Suchitra-Sahoo/AgriLearnNetworkt/issues/new/choose).
**Note**: Only start work on the issue after getting assigned by the repository maintainer.

### 2. Fork the Repository.
Click the "Fork" button on the GitHub repository to create your own copy of the project.

### 3. Clone Your Fork
```bash
git clone https://github.com/<yourusername>/AgriLearnNetwork.git
```

### 4. Navigate to the newly created firstspot project directory:
```bash
cd AgriLearnNetwork
```

### 5. Set upstream command
Set the upstream to synchronize your forked repository with the original repository.
```bash
git remote add upstream https://github.com/Suchitra-Sahoo/AgriLearnNetwork
```

### 6. Create a new branch
```bash
git checkout -b YourBranchName
```

### 7. Sync your fork or your local repository with the origin repository

#### Method 1:
using the Command Line Interface.
```bash
git fetch upstream

git merge upstream/main
```

#### Method 2:
Using the github Graphical User Interface.
- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### 8. Make your changes to the source code.

### 9. Stage your changes and commit
⚠️ Make sure not to run the commands git add . or git add *. Instead, stage your changes for each file/folder

```bash
git add <file/folder_you_made_changes_to>
```

```bash
git commit -m  "<your_commit_message>"
```

### 10. Push your local commits to the remote repository
```bash
git push origin yourBranchName
```

### 11. In your forked repository create a Pull Request(PR)
See the Pull Requests guidelines [here](#submitting-pull-requests).

**Note:** After making PR wait for the PR to be reviewed and make changes if required.

### 12. Congratulations!🎉 You've made your first contribution to firstspot! 🙌🏼

## Submitting Pull Requests
When submitting a pull request, please ensure the following:

- You have added necessary tests for your changes.
- The pull request description clearly explains the changes made and the reasoning behind them.
- Screenshot of the change
