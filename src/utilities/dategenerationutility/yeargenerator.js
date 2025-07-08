// This utility generates the current year dynamically
// create date object 
const Date= new Date();

// get the current year
const YearGenerator = Date.getFullYear();

// Export the current year
export default YearGenerator;

// This allows other modules to import the current year value