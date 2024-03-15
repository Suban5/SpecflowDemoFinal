@test
Feature: ShoppingCart

As a customer 
I want to calculate the total price of items in my shopping cart
So that I know how much I'll be paying

@shoppin @price
Scenario: Calculate Total Price of item added in shopping cart
	Given the following items are in my shopping cart:
		| Item      | Quantity | Price |
		| Chocolate | 2        | 100   |
		| Chips     | 1        | 50    |
		| Juice     | 2        | 25    |
	When I calculate the total price
	Then the total price should be 300
