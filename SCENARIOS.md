# Scenarios 

```gherkin  
Feature: Caesar cipher
  Scenario: It should correctly encrypt a sentence
    Given I enter a sentence "defend the east wall of the castle"
    And I enter a step "5"
    Then I click on Encrypt
    And I see output text "ijkjsi ymj jfxy bfqq tk ymj hfxyqj"

  Scenario: It should correctly decrypt a sentence
    Given I enter a sentence "defend the east wall of the castle"
    And I enter a step "1"
    Then I click on Decrypt
    And I see output text "efgfoe uif fbtu xbmm pg uif dbtumf"
```

```gherkin  
Feature: Affine cipher
  Scenario: It should correctly encrypt a sentence
    Given I enter a sentence "defend the east wall of the castle"
    And I enter a steps "1" and "1"
    Then I click on Encrypt
    And I see output text "efgfoeuiffbtuxbmmpguifdbtumf"

  Scenario: It should correctly decrypt a sentence
    Given I enter a sentence "efgfoeuiffbtuxbmmpguifdbtumf"
    And I enter a step "1"
    Then I click on Decrypt
    And see output text "defendtheeastwallofthecastle"
```

```gherkin  
Feature: Vigenere cipher
  Scenario: It should correctly encrypt a sentence
    Given I enter a sentence "defend the east wall of the castle"
    And I enter a keyword "fortification"
    Then I click on Encrypt
    And I see output text "iswxvi vhx snxh piqt oy huj ttaytg"

  Scenario: It should correctly decrypt a sentence
    Given I enter a sentence "iswxvi vhx snxh piqt oy huj ttaytg"
    And I enter a keyword "fortification"
    Then I click on Decrypt
    And see output text "defend the east wall of the castle"
```

```gherkin  
Feature: Hill cipher
  Scenario: It should correctly encrypt a sentence
    Given I enter a sentence "ATTACK AT DAWN"
    And I enter a key matrix "[[2,4,5],[9,2,1],[3,17,7]]"
    Then I click on Encrypt
    And I see output text "pfogoanpgxfx"

  Scenario: It should correctly decrypt a sentence
    Given I enter a sentence "pfogoanpgxfx"
    And I enter a key matrix "[[2,4,5],[9,2,1],[3,17,7]]"
    Then I click on Decrypt
    And see output text "attackatdawn"
```
