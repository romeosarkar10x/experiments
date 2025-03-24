# Fuzzy Set Cross Product

## Introduction
A **fuzzy set** is an extension of a classical set where elements have a membership degree in the range \([0,1]\). Given two fuzzy sets **A** and **B**, their **cross product** is defined as a **matrix** where each element is computed using a **T-norm** (Triangular Norm), which generalizes intersection operations in fuzzy logic.

### Notation
- Let **A** and **B** be two fuzzy sets:
  $$ A = \{ (a_1, \mu_A(a_1)), (a_2, \mu_A(a_2)), ..., (a_m, \mu_A(a_m)) \} $$
  $$ B = \{ (b_1, \mu_B(b_1)), (b_2, \mu_B(b_2)), ..., (b_n, \mu_B(b_n)) \} $$
- Their cross product is given by:
  $$ A \times B = \sum T(\mu_A(a), \mu_B(b)) $$
  where **T(a, b)** represents a **T-norm** function.

## T-Norm Functions
There are different ways to define the T-norm function:

1. **Minimum T-norm (Mamdani's Rule):**
   $$ T(a, b) = \min(a, b) $$
2. **Algebraic Product T-norm (Larsen's Rule):**
   $$ T(a, b) = a \cdot b $$
3. **Bounded Product T-norm:**
   $$ T(a, b) = \max(0, a + b - 1) $$
4. **Drastic Product T-norm:**
   $$ T(a, b) = \begin{cases}
   a, & \text{if } b = 1 \\
   b, & \text{if } a = 1 \\
   0, & \text{if } a < 1 \text{ and } b < 1
   \end{cases} $$

## Example Calculation
Consider two fuzzy sets:

$$ A = \{ (x_1, 0.2), (x_2, 0.8) \} $$
$$ B = \{ (y_1, 0.5), (y_2, 0.7) \} $$

The cross product matrix under different **T-norms** is:

### **Mamdani's Minimum T-norm**
|  A \ B  | 0.5 | 0.7 |
|---------|-----|-----|
| **0.2** | 0.2 | 0.2 |
| **0.8** | 0.5 | 0.7 |

### **Algebraic Product T-norm**
|  A \ B  | 0.5  | 0.7  |
|---------|------|------|
| **0.2** | 0.1  | 0.14 |
| **0.8** | 0.4  | 0.56 |

### **Bounded Product T-norm**
|  A \ B  | 0.5  | 0.7  |
|---------|------|------|
| **0.2** | 0    | 0    |
| **0.8** | 0.3  | 0.5  |

### **Drastic Product T-norm**
|  A \ B  | 0.5 | 0.7 |
|---------|-----|-----|
| **0.2** |  0  |  0  |
| **0.8** |  0  |  0  |

(For drastic product, all values are **0** unless either **A** or **B** contains a membership value of **1**.)

---


# **Bounded Product Operator**
The **Bounded Product** of two fuzzy sets \( A \) and \( B \) is defined as:

$$ R_{bp} = A \times B = \int_{x,y} M_A(x) \odot M_B(y) \, (x,y) $$

Expanding further:

$$ R_{bp} = \int_{x,y} 0 \vee \left( M_A(x) + M_B(y) - 1 \right) $$

or simply:

$$ t_{bp} = 0 \vee (a + b - 1) $$

---

# **Drastic Product Operator**
The **Drastic Product** of two fuzzy sets \( A \) and \( B \) is defined as:

$$ R_{dp} = A \times B = \int_{x,y} M_A(y) \odot M_B(y) \, (x,y) $$

or,

$$ t_{dp}(a, b) =
\begin{cases}
a, & \text{if } b = 1 \\
b, & \text{if } a = 1 \\
0, & \text{otherwise}
\end{cases} $$

---

# **Interpretation of $ A \rightarrow B $**
There are three main ways to interpret the **implication**:

### **1. Material Implication**
$$ R: A \rightarrow B = \bar{A} \cup B $$

### **2. Propositional Calculus**
$$ R: A \rightarrow B = \bar{A} \cup (A \cap B) $$

### **3. Extended Propositional Calculus**
$$ R: A \rightarrow B = (\bar{A} \cap B) \cup B $$

---

# **Fuzzy Implication Functions**
Given the above interpretations, there are multiple **fuzzy implication functions** commonly used in **fuzzy rule-based systems**.

## **Zadeh’s Arithmetic Rule**
$$ R_{za} = \bar{A} \cup B = \int_{x,y} 1 \wedge (1 - M_A(x) + M_B(y)) $$

<p align="center">or</p>

$$ t_{za} = 1 \wedge (1 - a + b) $$

---

## **Zadeh’s Max-Min Rule**
$$ R_{mm} = \bar{A} \cup (A \cap B) = \int_{x,y} (1 - M_A(x)) \vee (M_A(x) \wedge M_B(y)) $$

<p align="center">or</p>

$$ t_{mm}(a, b) = (1 - a) \vee (a \wedge b) $$

---

## **Boolean Fuzzy Rule**
$$ R_{bf} = \bar{A} \cup B $$

<p align="center">or<p>

$$ t_{bf}(a, b) = (1 - a) \vee b $$

---

## **Goguen’s Fuzzy Rule**
$ R_{gf} = \int_{x,y} M_A(x) \times M_B(y) \ $
where,
$ t_{gf}(a, b) = \begin{cases} 1, & \text{if } a \leq b \\ b/a, & \text{if } a > b \end{cases} $

---