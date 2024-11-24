#Credit to chatGPT lol

import os

#parameters
TARGET_FOLDER = "./mods"
FILE_NAME = "./mods/mods.txt"

def dump_files_in_folder(folder_path, output_file="file_dump.txt"):
    """
    Recursively lists all files in a folder and saves them to a text file.

    :param folder_path: Path to the folder to scan.
    :param output_file: Path to the output text file.
    """
    try:
        with open(output_file, 'w') as file_output:
            for root, dirs, files in os.walk(folder_path):
                for filename in sorted(files):
                    full_path = filename #Only the file name is neccesary
                    file_output.write(full_path + '\n')
        print(f"File list successfully saved to '{output_file}'")
    except Exception as e:
        print(f"An error occurred: {e}")


# Call the function
dump_files_in_folder(TARGET_FOLDER,FILE_NAME)
