import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newData = req.body;

    // Define the path to the JSON file
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

      // Append the new data
      existingData.push(newData);

      // Write the combined data back to the file
      fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
        if (err) {
          console.error('Error writing to file', err);
          return res.status(500).json({ message: 'Error writing to file' });
        }
        res.status(200).json({ message: 'Data written to file successfully' });
      });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
