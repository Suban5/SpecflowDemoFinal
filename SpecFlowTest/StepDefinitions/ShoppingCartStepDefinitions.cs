using CalculatorApp;
using NUnit.Framework;
using System;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Assist;

namespace SpecFlowTest.StepDefinitions
{
    [Binding]
    public class ShoppingCartStepDefinitions
    {
        private ShoppingCart _shoppingCart = new ShoppingCart();
        private decimal totalPrice;

        [Given(@"the following items are in my shopping cart:")]
        public void GivenTheFollowingItemsAreInMyShoppingCart(Table table)
        {
            var itemDetailsList = table.CreateSet<itemDetails>();

            foreach (var itemDetails in itemDetailsList)
            {
                _shoppingCart.AddItem(itemDetails.Item, itemDetails.Quantity, itemDetails.Price);
            }
        }

        [When(@"I calculate the total price")]
        public void WhenICalculateTheTotalPrice()
        {
            totalPrice = _shoppingCart.CalculateTotalPrice();
        }

        [Then(@"the total price should be (.*)")]
        public void ThenTheTotalPriceShouldBe(int expectedPrice)
        {
            Assert.AreEqual(expectedPrice, totalPrice);
        }
    }

    public class itemDetails
    {
        public string Item { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
