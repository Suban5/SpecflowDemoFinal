jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "Calculator.feature",
      "Feature": {
        "Name": "Calculator",
        "Description": "![Calculator](https://specflow.org/wp-content/uploads/2020/09/calculator.png)\r\nSimple calculator for adding **two** numbers\r\n\r\nLink to a feature: [Calculator](SpecFlowTest/Features/Calculator.feature)\r\n***Further read***: **[Learn more about how to generate Living Documentation](https://docs.specflow.org/projects/specflow-livingdoc/en/latest/LivingDocGenerator/Generating-Documentation.html)**",
        "FeatureElements": [
          {
            "Name": "Add two numbers",
            "Slug": "add-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is 50",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is 70",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@add"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          },
          {
            "Name": "Multiply two numbers",
            "Slug": "multiply-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is 5",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is 7",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are multiplied",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 35",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@multiply",
              "@ignore"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Name": "Add two numbers using data table",
            "Slug": "add-two-numbers-using-data-table",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first and second number are:",
                "TableArgument": {
                  "HeaderRow": [
                    "Number1",
                    "Number2"
                  ],
                  "DataRows": [
                    [
                      "10",
                      "20"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 30",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@add"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": [
          "@test"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "ScenarioOutlineExample.feature",
      "Feature": {
        "Name": "ScenarioOutlineExample",
        "Description": "",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "1 add positive numbers",
                "TableArgument": {
                  "HeaderRow": [
                    "number1",
                    "number2",
                    "expectedSum"
                  ],
                  "DataRows": [
                    [
                      "50",
                      "70",
                      "120",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      "7",
                      "12",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "1",
                      "2",
                      "3",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [
                  "@positive"
                ],
                "NativeKeyword": "Examples"
              },
              {
                "Name": "2 add negative numbers",
                "TableArgument": {
                  "HeaderRow": [
                    "number1",
                    "number2",
                    "expectedSum"
                  ],
                  "DataRows": [
                    [
                      "-50",
                      "-70",
                      "-120",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "-5",
                      "-7",
                      "-12",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "-1",
                      "-2",
                      "-5",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [
                  "@negative"
                ],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Add two numbers using scenario outline",
            "Slug": "add-two-numbers-using-scenario-outline",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is <number1>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is <number2>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <expectedSum>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@add"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": [
          "@test"
        ]
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "ShoppingCart.feature",
      "Feature": {
        "Name": "ShoppingCart",
        "Description": "As a customer \r\nI want to calculate the total price of items in my shopping cart\r\nSo that I know how much I'll be paying",
        "FeatureElements": [
          {
            "Name": "Calculate Total Price of item added in shopping cart",
            "Slug": "calculate-total-price-of-item-added-in-shopping-cart",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the following items are in my shopping cart:",
                "TableArgument": {
                  "HeaderRow": [
                    "Item",
                    "Quantity",
                    "Price"
                  ],
                  "DataRows": [
                    [
                      "Chocolate",
                      "2",
                      "100"
                    ],
                    [
                      "Chips",
                      "1",
                      "50"
                    ],
                    [
                      "Juice",
                      "2",
                      "25"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I calculate the total price",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the total price should be 300",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@shoppin",
              "@price"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": [
          "@test"
        ]
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@test",
        "Total": 5,
        "Passing": 3,
        "Failing": 1,
        "Inconclusive": 1
      },
      {
        "Tag": "@add",
        "Total": 3,
        "Passing": 2,
        "Failing": 1,
        "Inconclusive": 0
      },
      {
        "Tag": "@multiply",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@ignore",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@shoppin",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@price",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Folders": [
      {
        "Folder": "Calculator.feature",
        "Total": 3,
        "Passing": 2,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "ScenarioOutlineExample.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 1,
        "Inconclusive": 0
      },
      {
        "Folder": "ShoppingCart.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "Calculator.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ScenarioOutlineExample.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ShoppingCart.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 5,
      "Passing": 3,
      "Failing": 1,
      "Inconclusive": 1
    },
    "Features": {
      "Total": 3,
      "Passing": 1,
      "Failing": 1,
      "Inconclusive": 1
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "Calculator.feature",
        "Total": 3,
        "Automated": 3,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "ScenarioOutlineExample.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "ShoppingCart.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "SutName": "test",
    "SutVersion": "1.0",
    "GeneratedOn": "15 March 2024 18:53:30"
  }
});