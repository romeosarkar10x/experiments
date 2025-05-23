---
date: "2025-05-15T14:00:55+05:30"
params:
    author: "romeosarkar10x"
---

# Printing secrets in _Github Actions_

In this post we will see how we can print secrets in Github Actions.

I will be using the following Github repository:
https://github.com/romeosarkar10x-experiment/printing-secrets

## Creating a secret

- Go to the repository settings.
  {{< image/index 1.png >}}

- Then, on the navigation-bar in the left, goto _Secrets and variables_.
  {{< image/index 2.png >}}

- Then Click on _Actions_.
  {{< image/index 3.png >}}
- Then, on the _Secrets_ section, click on the _New repository secret_ button.
  {{< image/index 4.png >}}
- Now, fill in the _Name_ (name of the secret key) and the _Secret_ (value of the secret key), and click on the _Add secret_ button.
  {{< image/index 5.png >}}
- This will redirect us back to the _Secrets_ section, where we can see the newly added secret.
  {{< image/index 6.png >}}

## Creating a workflow

- Create a file .github/workflows/&lt;filename&gt;.[yml|yaml]
- Write a workflow

The above workflow directly echoes the secret by running the echo command.

The following output is generated:
{{< github/github-actions/workflow-run/index "romeosarkar10x" "expt" "14521301932" >}}
