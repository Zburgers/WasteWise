import React, { useState, useEffect } from 'react';

interface Facility {
  id: string;
  name: string;
  address: string;
  requirements: string[];
  type: 'disposal' | 'recycling';
}

interface NearbyFacilitiesProps {
  userLocation: string | null; // User's location string
  detectedTrashType: string | null; // Type of trash detected
}

const NearbyFacilities: React.FC<NearbyFacilitiesProps> = ({ userLocation, detectedTrashType }) => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [filteredFacilities, setFilteredFacilities] = useState<Facility[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'disposal' | 'recycling'>('all');

  // Dummy data - replace with API call in a real application
  const fetchFacilities = async (location: string, trashType: string | null): Promise<Facility[]> => {
    console.log(`Fetching facilities for location: ${location} and trash type: ${trashType}`);
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // This is dummy data. In a real app, you would use a mapping/facilities API
    // and tailor the results based on location and trashType.
    return [
      {
        id: '1',
        name: 'City Recycling Center',
        address: '123 Main St, Anytown',
        requirements: ['Clean plastic containers', 'Paper and cardboard', 'Glass bottles'],
        type: 'recycling',
      },
      {
        id: '2',
        name: 'Waste Management Landfill',
        address: '456 Dump Rd, Anytown',
        requirements: ['General waste', 'Non-recyclables'],
        type: 'disposal',
      },
      {
        id: '3',
        name: 'Green Earth Recycling',
        address: '789 Green Ave, Anytown',
        requirements: ['Electronics', 'Batteries'],
        type: 'recycling',
      },
      {
        id: '4',
        name: 'Hazardous Waste Drop-off',
        address: '101 Chemical Ln, Anytown',
        requirements: ['Paints', 'Chemicals', 'Oils'],
        type: 'disposal',
      },
    ];
  };

  useEffect(() => {
    if (userLocation) {
      // Fetch facilities when userLocation or detectedTrashType changes
      fetchFacilities(userLocation, detectedTrashType).then(data => {
        setFacilities(data);
        setFilteredFacilities(data); // Initialize filtered facilities
      });
    } else {
      setFacilities([]);
      setFilteredFacilities([]);
    }
  }, [userLocation, detectedTrashType]);

  useEffect(() => {
    // Apply filters and search when facilities, searchTerm, or filterType change
    let currentFiltered = facilities;

    if (filterType !== 'all') {
      currentFiltered = currentFiltered.filter(facility => facility.type === filterType);
    }

    if (searchTerm) {
      currentFiltered = currentFiltered.filter(facility =>
        facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredFacilities(currentFiltered);
  }, [facilities, searchTerm, filterType]);

  if (!userLocation) {
    return null; // Don't render if location is not set
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Nearby Facilities</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search facilities..."
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as 'all' | 'disposal' | 'recycling')}
          >
            <option value="all">All Types</option>
            <option value="recycling">Recycling Centers</option>
            <option value="disposal">Disposal Sites</option>
          </select>
        </div>

        {filteredFacilities.length === 0 ? (
          <p className="text-center text-gray-600">No facilities found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map(facility => (
              <div key={facility.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.address}</p>
                <div>
                  <h4 className="text-lg font-medium mb-2">Accepted Items/Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {facility.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <span className={`inline-block mt-4 px-3 py-1 text-sm font-semibold rounded-full ${facility.type === 'recycling' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {facility.type === 'recycling' ? 'Recycling' : 'Disposal'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NearbyFacilities;