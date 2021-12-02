# Git Note - Problem solving for some scenarios

---

### Undo git revert

#### Situation

- Your commits were merged to master
- For some reasons, you need to revert your commits
- You want to push again your old commits but the current local branch doesn't show any code change

#### Solution

- Step 1: From the current local branch, create a new branch which will be used to host your old commits

- Step 2: Locate and copy the id of the base commit from which your original branch was created from.
  This commit is one commit before your parent commit.
  Your parent commit is the first commit which created your original branch
  You can use `git log --graph --oneline --all`

- Step 3: Run `git rebase --no-ff <base commit id>` to rebase your new branch to replay your old commits

- Step 4: Push your commit
  Note that you don't need to run `git add` or `git commit` in this case

---

### Revert a particular file in your pushed commit

Situation

- Your commits contain a number of files
- You only want to revert (a) particular files, not the whole commit

Solution

- Run this command `git checkout origin/master path-to-file`

---

### Bring uncomitted change to a new branch

There are 2 ways you can achieve this. From the current local branch:

- Solution 1: `git checkout -b <new branch>`
- Solution 2: `git switch -c <new-branch>`

---

### Reset your branch to a past commit

- Step 1: Locate and copy the id of you past commit
  You can use `git log --graph --oneline --all`

- Step 2: Run `git reset --hard <past commit id>`

---

### Resolve Git conflict

#### Solution 1

##### Step-by-step

- From your current local branch, run `git pull origin master`
- Check the conflicted files by `git status`
- Click on each conflicted file to resolve the conflicts
- After all conflicts are resolved, do `git add .` following by a `git commit -m <commit message>` and lastly `git push origin <current branch>`

##### Pros

- This solution is straightforward and easy-doing

##### Cons

- This solution will create many commits in the branch. Thus, when it comes to other complicated issues, it's tricky to track down where/when the issue comes from

#### Solution 2

##### Step-by-step

- `git fetch origin master`
- `git rebase origin/master`
- `git status` : to check what need to be resolved
- `git add -u`
- Once everything is resolved `git rebase --continue`. If the command does not exit, type `:wq`
- `git log` to check the log of push from remote
- `git push origin <your branch> -f`

##### Pros

- This solution does not create a new commit, so you can control the number of commits on your branch as you wish

##### Cons

- However, it does contain risks when you force push the commit
