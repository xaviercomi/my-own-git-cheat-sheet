export const cheatCards = [
  {
    id: 0,
    description: "Inicialize a repository",
    command: "git init",
  },
  {
    id: 1,
    description: "prints the Git suite version",
    command: "git -v",
  },
  {
    id: 2,
    description: "Register all your changes",
    command: "git add .",
  },
  {
    id: 3,
    description: "All your changes to the HEAD",
    command: 'git commit -m "commit message"',
  },
  {
    id: 4,
    description: "Send your files to the remote",
    command: "git push origin main",
  },

  {
    id: 5,
    description: "do not clone?, connect with",
    command: "git remote add origin <server>",
  },
  {
    id: 6,
    description: "the branch tracked on the remote repository",
    command: "git push -u <remote> <branch>",
  },
];
