### **Creating/switching to/deleting branches**

- `git branch <branch-name>` - create a new branch `<branch-name>`. This does not automatically switch you (check out) this new branch, just creates it.
- `git checkout <branch-name>` - switch to another, existing branch
- `git checkout -b <branch-name>` - create a new branch and immediately check out that branch.
- `git branch -d <branch-name>` - delete a branch. You can't delete a branch you're currently on, so you need to checkout another branch first.
    - If git determines that you may lose some changes that haven't been committed by deleting a branch, it will give you a warning. If this command successfully runs, you can rest assured you haven't lost any changes.
- `git fetch --prune` - remove any local upstream-tracked branches that have been removed from the remote repository. If you submit a pull request and delete the feature branch after merging it into your main code, you could run this command to clean up your local repository.

### **Staging/committing/pushing**

- `git add <filename>` - stage a specific file for committing
- `git add -A` - stage everything that has been modified since the last commit for committing.
- `git commit` - create a new commit (save point) of everything that has been staged. This will open a terminal editor like "vi" for you to write in a commit message.
- `git commit -m "<commit message>"` - create a new commit *and* provide a commit message all in one. This will *not* open a terminal editor, since you provided the commit message inline with the commit command.
- `git push` - push all new commits since the last push to the remote repository. This assumes you've already pushed this branch before. If you haven't...
- `git push -u <remote-name> <branch-name>` - pushes a branch called `<branch-name>` for the first time to the remote called `<remote-name>`, and sets up remote tracking for that branch (with the `u` flag). Typically this command will look something like `git push -u origin navbar`.
    - Two good reasons to push your feature branch - 1. you want someone's help with the branch, and therefore need to push it up so they can pull it down to their machine, OR 2. you're ready to submit a pull request to merge your feature branch into the main code. Don't just push your feature branch to the repository out of habit.

### **Merging/fixing conflicts**

- `git merge <branch-name>` - merge changes from `<branch-name>` into your current branch. If there are no conflicts, this will open an editor like "vi" and auto-populate a commit message for you, which you can just save as-is. (If it is "vi", hold "SHIFT" and press "Z" twice to save and quit.)
- `git merge --no-ff <branch-name>` - same as above, but will also maintain a nicer branch history. It's usually recommended to include the `-no-ff` flag when merging branches.
- `git mergetool` - open the default git tool for fixing conflicts. If after a merge there are a bunch of conflicts (shows up in the terminal with "CONFLICT"), you'll need to fix those conflicts before the merge will complete.

### **Cloning, working with remotes**

- `git clone <ssh or https url>` - download a project from a remote repository and put everything in a new folder with the same name as a the repository's name. Also sets up a remote called `origin` set to the same location as `<ssh or https url>` for future pushing/pulling from this remote.
- `git clone <ssh or https url> <new-folder-name>` - same as above, but choose a different name for the local folder if you don't want it to have the same name as the repository.
- `git remote -v` - check the URL of all your remotes.
- `git remote add <remote name> <ssh or https url>` - create a new "remote" address for pushing/pulling branches. The *super* common convention for your first/main remote is to use the name `origin`, so the command above will typically look like `git remote add origin <ssh or https url>`. You may, however, add as many remotes as you'd like, in case you want to push your code to more than one remote repository.
- `git remote remove <remote-name>` - remove a remote. You'll no longer be able to push/pull from that remote unless you add it back.

---

# **Common Workflows**

For these commands, we'll assume a simple structure where the `master` branch is the one you branch off of to do development work. In a real dev environment, your team will likely have many layers between the code you develop on and the `master` branch, such as some deployment branches, QA branches, etc.

### **Start working on a new feature branch**

1. `git checkout master`
2. `git pull` - makes sure that you're starting from the latest code
3. `git checkout -b <new-branch-name>` - create and checkout a new branch

### **Merge a local branch to the local master branch. (Only to be used when working alone on a project)**

Assuming you're already on your feature branch and have finished developing the new feature and would like to merge it into the main master branch code:

1. (Commit your code from the feature branch)
2. `git checkout master`
3. `git pull` (Just in case it was updated from somewhere else, like directly from Github).
4. `git merge --no-ff <feature-branch>`

### **Update your branch to include the latest changes from `master`**

Commit your current changes, check out the `master` branch and pull, checkout your feature branch again and merge `master` into your feature branch:

1. (Commit your code from your feature branch)
2. `git checkout master`
3. `git pull`
4. `git checkout <feature-branch>`
5. `git merge --no-ff master`
6. Save the automatic merge message that opens in Vim with Shift + ZZ (Hold shift and type Z twice)

### **Prepare to open a pull request on Github (or whatever online service you're using)**

1. `git checkout master` (or other starting-point branch)
2. `git pull` - make sure you have the latest code, in case the `master` branch has progressed since you branched off of it when you started working on this new branch
3. `git checkout <feature-branch>` - Move back to the branch you've been working on
    1. If there was new code pulled down to the `master` branch after running `git pull`, you'll now run `git merge --no-ff master` to update your current branch with the changes that have recently been made on `master`
    2. If there were conflicts when merging in the previous step, you'll fix those now with `git mergetool`, finishing everything off with `git commit` (no `m` this time) and saving the pre-populated merge commit message.
4. TEST YOUR PROJECT - Don't push up a branch that includes code that broke your project! Before you push, run the project to make sure it seems to be working as expected. If you have automated tests written, run all of them now.
5. `git push -u origin <feature-branch>` - push your branch to Github
6. Go to your github repo and create a new pull request with the branch you just pushed.
    1. Let your team look at the changes you made, add comments, suggest new changes or fixes, etc. Make sure to remove any `console.log`s or commented-out code. Think of the `master` branch as a final draft of a college paper.

### **Clean up after successfully completing a pull request**

1. Github offers to delete the remote branch you just merged to master. This is usually a good idea to avoid extraneous, unused branches from cluttering up the repository.
    - If you forgot to delete the remote branch from Github or chose not to, but now would like to delete it, you can delete a remote branch on Github from the terminal by running `git push --delete <remote-name> <branch-name>`. This would likely be something like `git push --delete origin navbar`.
2. `git checkout master` - move to the master branch, where you just finished merging your code via the pull request on Github.
3. `git pull` - pull down those latest changes
4. `git branch -d <feature-branch>` - since your branch has been successfully merged, you don't need the local copy of it anymore and it should be removed.
5. `git fetch --prune` - remove the local tracking branches that you deleted from the remote repo.