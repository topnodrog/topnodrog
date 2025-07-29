
import os
import shutil

def update_whitepaper():
    # Get the list of available whitepaper versions
    whitepaper_versions = os.listdir("whitepaper_versions")

    # Prompt the user to select a version
    print("Available whitepaper versions:")
    for i, version in enumerate(whitepaper_versions):
        print(f"{i+1}. {version}")

    while True:
        try:
            selection = int(input("Enter the number of the version you want to use: "))
            if 1 <= selection <= len(whitepaper_versions):
                break
            else:
                print("Invalid selection. Please try again.")
        except ValueError:
            print("Invalid input. Please enter a number.")

    selected_version = whitepaper_versions[selection-1]

    # Clear the whitepaper directory
    for filename in os.listdir("whitepaper"):
        file_path = os.path.join("whitepaper", filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print(f"Failed to delete {file_path}. Reason: {e}")

    # Copy the selected version to the whitepaper directory
    shutil.copytree(os.path.join("whitepaper_versions", selected_version), os.path.join("whitepaper", selected_version))

    print(f"Successfully updated the whitepaper to {selected_version}")

if __name__ == "__main__":
    update_whitepaper()
