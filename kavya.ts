import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
/Users/soumyashekhar/Desktop
const KavyaDashboard = () => {
  const [impactData, setImpactData] = useState([
    { month: 'Jan', revenue: 5000000, ngo_donation: 12000, recycled: 1200, sustainable_materials: 20, personnel_trained: 5, products_sold: 2000 },
    { month: 'Feb', revenue: 10000000, ngo_donation: 13500, recycled: 1350, sustainable_materials: 22, personnel_trained: 9, products_sold: 2150 },
    { month: 'Mar', revenue: 15000000, ngo_donation: 15000, recycled: 1500, sustainable_materials: 24, personnel_trained: 13, products_sold: 2300 },
    { month: 'Apr', revenue: 20000000, ngo_donation: 16000, recycled: 1600, sustainable_materials: 26, personnel_trained: 17, products_sold: 2400 },
    { month: 'May', revenue: 25000000, ngo_donation: 17500, recycled: 1750, sustainable_materials: 28, personnel_trained: 21, products_sold: 2500 },
    { month: 'Jun', revenue: 30000000, ngo_donation: 18000, recycled: 1800, sustainable_materials: 30, personnel_trained: 25, products_sold: 2550 },
    { month: 'Jul', revenue: 35000000, ngo_donation: 18500, recycled: 1850, sustainable_materials: 32, personnel_trained: 29, products_sold: 2600 },
    { month: 'Aug', revenue: 40000000, ngo_donation: 19000, recycled: 1900, sustainable_materials: 34, personnel_trained: 33, products_sold: 2650 },
    { month: 'Sep', revenue: 45000000, ngo_donation: 19500, recycled: 1950, sustainable_materials: 36, personnel_trained: 37, products_sold: 2700 },
    { month: 'Oct', revenue: 50000000, ngo_donation: 20000, recycled: 2000, sustainable_materials: 38, personnel_trained: 41, products_sold: 2750 },
    { month: 'Nov', revenue: 55000000, ngo_donation: 20500, recycled: 2050, sustainable_materials: 40, personnel_trained: 45, products_sold: 2800 },
    { month: 'Dec', revenue: 60000000, ngo_donation: 21000, recycled: 2100, sustainable_materials: 42, personnel_trained: 49, products_sold: 2850 },
    { month: 'Jan', revenue: 65000000, ngo_donation: 21500, recycled: 2150, sustainable_materials: 44, personnel_trained: 53, products_sold: 2900 },
    { month: 'Feb', revenue: 70000000, ngo_donation: 22000, recycled: 2200, sustainable_materials: 46, personnel_trained: 57, products_sold: 2950 },
    { month: 'Mar', revenue: 70000000, ngo_donation: 22500, recycled: 2250, sustainable_materials: 48, personnel_trained: 61, products_sold: 3000 },
    { month: 'Apr', revenue: 70000000, ngo_donation: 23000, recycled: 2300, sustainable_materials: 50, personnel_trained: 65, products_sold: 3050 },
    { month: 'May', revenue: 70000000, ngo_donation: 23500, recycled: 2350, sustainable_materials: 52, personnel_trained: 69, products_sold: 3100 },
    { month: 'Jun', revenue: 70000000, ngo_donation: 24000, recycled: 2400, sustainable_materials: 54, personnel_trained: 69, products_sold: 3150 },
    { month: 'Jul', revenue: 70000000, ngo_donation: 24500, recycled: 2450, sustainable_materials: 56, personnel_trained: 69, products_sold: 3200 },
    { month: 'Aug', revenue: 70000000, ngo_donation: 25000, recycled: 2500, sustainable_materials: 58, personnel_trained: 69, products_sold: 3250 },
    { month: 'Sep', revenue: 70000000, ngo_donation: 25500, recycled: 2550, sustainable_materials: 60, personnel_trained: 69, products_sold: 3300 },
    { month: 'Oct', revenue: 70000000, ngo_donation: 26000, recycled: 2600, sustainable_materials: 62, personnel_trained: 69, products_sold: 3350 },
    { month: 'Nov', revenue: 70000000, ngo_donation: 26500, recycled: 2650, sustainable_materials: 64, personnel_trained: 69, products_sold: 3400 },
    { month: 'Dec', revenue: 70000000, ngo_donation: 27000, recycled: 2700, sustainable_materials: 66, personnel_trained: 69, products_sold: 3450 },
    { month: 'Jan', revenue: 70000000, ngo_donation: 27500, recycled: 2750, sustainable_materials: 68, personnel_trained: 69, products_sold: 3500 },
    { month: 'Feb', revenue: 70000000, ngo_donation: 28000, recycled: 2800, sustainable_materials: 70, personnel_trained: 69, products_sold: 3550 }
  ]);

  const [damagePreventedCount, setDamagePreventedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpactData(prevData => [
        ...prevData.slice(1),
        {
          month: String.fromCharCode(prevData[prevData.length - 1].month.charCodeAt(0) + 1),
          revenue: prevData[prevData.length - 1].revenue + 5000000,
          ngo_donation: prevData[prevData.length - 1].ngo_donation + 500,
          recycled: prevData[prevData.length - 1].recycled + 50,
          sustainable_materials: prevData[prevData.length - 1].sustainable_materials + 2,
          personnel_trained: prevData[prevData.length - 1].personnel_trained + 4,
          products_sold: prevData[prevData.length - 1].products_sold + 50
        }
      ]);

      const damagePreventedPerProduct = Math.floor(Math.random() * 5);
      setDamagePreventedCount(prevCount => prevCount + impactData[impactData.length - 1].products_sold * damagePreventedPerProduct);
    }, 2000);

    return () => clearInterval(interval);
  }, [impactData]);

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle>Kavya Ethnic Wear Dashboard (5 Year Timeframe)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">CSR Impact</h2>
            <LineChart width={800} height={400} data={impactData}>
              <XAxis dataKey="month" />
              <YAxis type="number" domain={[0, 70000000]} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              <Line type="monotone" dataKey="sustainable_materials" stroke="#ffc658" />
              <Line type="monotone" dataKey="personnel_trained" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-md shadow p-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">
                    {impactData[impactData.length - 1].revenue.toLocaleString()}
                  </div>
                  <div className="text-4xl font-bold text-red-500">♥</div>
                </div>
                <div className="text-gray-500">Total Revenue</div>
              </div>
              <div className="bg-white rounded-md shadow p-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">
                    {impactData[impactData.length - 1].ngo_donation.toLocaleString()}
                  </div>
                  <div className="text-4xl font-bold text-green-500">🌳</div>
                </div>
                <div className="text-gray-500">NGO Donation</div>
              </div>
              <div className="bg-white rounded-md shadow p-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">
                    {impactData[impactData.length - 1].recycled.toLocaleString()}
                  </div>
                  <div className="text-4xl font-bold text-purple-500">♻️</div>
                </div>
                <div className="text-gray-500">Items Recycled</div>
              </div>
              <div className="bg-white rounded-md shadow p-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">
                    {impactData[impactData.length - 1].sustainable_materials}%
                  </div>
                  <div className="text-4xl font-bold text-yellow-500">🚚</div>
                </div>
                <div className="text-gray-500">Sustainable Materials</div>
              </div>
              <div className="bg-white rounded-md shadow p-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">
                    {impactData[impactData.length - 1].personnel_trained}
                  </div>
                  <div className="text-4xl font-bold text-blue-500">👥</div>
                </div>
                <div className="text-gray-500">Personnel Trained</div>
              </div>
              <div className="bg-white rounded-md shadow p-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">
                    {damagePreventedCount.toLocaleString()}
                  </div>
                  <div className="text-4xl font-bold text-indigo-500">🛡️</div>
                </div>
                <div className="text-gray-500">Damage Prevented</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KavyaDashboard;