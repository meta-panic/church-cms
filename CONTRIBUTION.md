# CONTRIBUTION.MD

Rules for commit messages and branch names to maintain consistency and readability in our project.

## Branch Naming Conventions

All branch names must follow a consistent pattern to clearly indicate their purpose.  Use the following prefixes:

* **`feature/*`:** For new features.  Example: `feature/add-user-authentication`
* **`test/*`:** For testung a hypothesis. Example: `test/will-it-work-or-wont`
* **`fix/*`:** For bug fixes. Example: `fix/resolve-login-issue`
* **`chore/*`:** For tasks that don't directly affect the codebase (e.g., build process updates, dependency updates). Example: `chore/update-dependencies`


**Invalid Branch Names:**

Avoid vague or ambiguous branch names.  Examples of invalid branch names:

* `my-branch`
* `work-in-progress`
* `bugfix`


## Commit Message Conventions

Commit messages should be clear, concise, and informative.  They should follow the following format:

`<type>(Optional: <scope>): <short description>`

Where:

* **`<type>`:**  One of the following types:
    * `feat`: A new feature for the user.
    * `fix`: A bug fix for the user.
    * `docs`: Changes to the documentation.
    * `style`: Changes that don't affect the functionality (e.g., formatting, whitespace).
    * `refactor`: A code change that neither fixes a bug nor adds a feature.
    * `test`: Adding missing tests or refactoring existing tests.
    * `chore`: Changes to the build process or auxiliary tools and libraries.


* **`<scope>`:** (Optional) A short description of the area of the codebase affected by the change.  Example: `auth`, `database`, `ui`.


* **`<short description>`:** A concise summary of the change (50 characters or less).


**Example Commit Messages:**

* `feat(auth): Add user authentication`
* `fix(ui): Resolve button alignment issue`
* `docs(readme): Update installation instructions`
* `style: Fix formatting inconsistencies`
* `refactor(database): Improve database query performance`
* `test(api): Add unit tests for API endpoints`
* `chore: Update Node.js version`


**Body (Optional):**

For more complex changes, you can add a more detailed explanation in the body of the commit message.  Leave a blank line between the short description and the body.
