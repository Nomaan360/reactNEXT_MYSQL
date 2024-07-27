import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'data.json');

    // Read the existing data from the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err && err.code !== 'ENOENT') {
        console.error('Error reading file', err);
        return res.status(500).json({ message: 'Error reading file' });
      }

      // Parse the existing data or initialize as an empty array if the file doesn't exist
      let existingData = [];
      if (data) {
        existingData = JSON.parse(data);
      }

      res.status(200).json(existingData);

  
    });

}
