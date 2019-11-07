# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName FROM Products join Categories on products.CategoryId = categories.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderId, ShipperName FROM Orders JOIN Shippers ON orders.ShipperId = shippers.ShipperId WHERE OrderDate < "1997-01-09";

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity FROM OrderDetails JOIN Products ON orderDetails.ProductId = products.ProductId WHERE OrderId = "10251" ORDER BY ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName FROM Orders AS o JOIN Customers AS c ON c.CustomerId = o.CustomerId JOIN Employees AS e ON e.EmployeeId = o.EmployeeId;

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
