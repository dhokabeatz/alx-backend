
#!/usr/bin/env python3

import os
import subprocess

# Define the number of Python files to execute
num_files = 5

# Loop through the files and execute them
for i in range(num_files):
    file_name = f"{i}-main.py"
    if os.path.isfile(file_name):
        print(f"Running {file_name}...")
        subprocess.run(["python", file_name])
    else:
        print(f"{file_name} does not exist.")
