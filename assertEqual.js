const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😁😁😁Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("😩😩😩Assertion failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lowercase", "lowercase");
assertEqual("UPPERCASE", "UPPERCASE");
assertEqual(2, 1);
assertEqual(1, 1);