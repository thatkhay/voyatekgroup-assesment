

# Users & Roles Management

This project is a web application that allows users to manage users and roles within a business. It provides functionalities to view, create, update, and delete user accounts. The application is built with React and Next.js and includes components for a responsive layout and user management.

## Features

- **View Users**: Display a list of users with their details and roles.
- **Create User**: Add new users with details including name, email, role, and password.
- **Update User**: Edit existing user details including name, email, role, and password.
- **Delete User**: Remove users from the system.
- **Responsive Design**: Adapt to different screen sizes with mobile-friendly styling.

## Components

### Home Page

- **Header**: Displays the top navigation and branding.
- **Sidebar**: Provides navigation links and additional features.
- **Main Content**: Contains the user management interface including the user list and action tabs.

### Table Component

- **Table**: Renders user data in a tabular format with options to filter, add, edit, and delete users.
- **TableInput**: Allows for filtering user data.
- **TableCheckBox**: Provides checkboxes for selecting users.

### Modals

- **CreateUser**: Modal for creating new users.
- **UpdateUser**: Modal for updating existing user details.
- **DeleteUser**: Modal for confirming user deletions.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## Configuration

- **API Endpoints**: The application uses mock API endpoints for user management. Modify the endpoints in `Table.tsx` as necessary to integrate with a real backend service.

- **Assets**: Image assets used in the application are stored in the `assets` directory. Update paths in component files if you move or rename assets.

## Usage

- **Viewing Users**: Navigate to the "Users & Roles" section to see a list of users.
- **Creating Users**: Click on the "New User" button to open the CreateUser modal and fill in the form to add a new user.
- **Updating Users**: Click on "Edit" next to a user's name to open the UpdateUser modal and modify user details.
- **Deleting Users**: Click on "Remove" next to a user's name to open the DeleteUser modal and confirm the deletion.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

