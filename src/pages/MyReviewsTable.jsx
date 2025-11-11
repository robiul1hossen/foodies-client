import React from "react";
import { Link } from "react-router";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const MyReviewsTable = ({ reviews, handleDelete }) => {
  return (
    <div className="p-4 md:p-8">
      {reviews && reviews.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <Table className="w-full">
            <Thead className="bg-gray-100 text-gray-700">
              <Tr>
                <Th className="p-3 text-left">Photo</Th>
                <Th className="p-3 text-left">Food Name</Th>
                <Th className="p-3 text-left">Restaurant</Th>
                <Th className="p-3 text-left">Posted Date</Th>
                <Th className="p-3 text-center">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {reviews.map((review) => (
                <Tr
                  key={review._id}
                  className="border-b hover:bg-gray-50 transition">
                  <Td className="p-3">
                    <img
                      src={review.photo}
                      alt={review.foodName}
                      className="w-20 h-16 object-cover rounded-md"
                    />
                  </Td>
                  <Td className="p-3 font-medium">{review.foodName}</Td>
                  <Td className="p-3">
                    {review.restaurantName}
                    <p className="text-sm text-gray-500">
                      {review.restaurantLocation}
                    </p>
                  </Td>
                  <Td className="p-3 text-gray-600">
                    {new Date(review.createAt).toLocaleDateString()}
                  </Td>
                  <Td className="p-3 flex gap-2 justify-center">
                    <Link
                      to={`/edit-review/${review._id}`}
                      className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                      Delete
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">
          No reviews found for your account.
        </p>
      )}
    </div>
  );
};

export default MyReviewsTable;
