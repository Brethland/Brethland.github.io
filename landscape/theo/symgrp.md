---
title: 對稱群
---

沒有運動的物理學一定是不完整的物理學，為了能闡述運動，我們需要獨立於特殊對象，建立起一門關於變換和對稱的科學。數學再一次幫助了我們：群，是一個天然適合表述變換的代數結構。從具體的例子說，設想有一種二維旋轉變換，定義向左為$L(x)$，向右為$R(x)$，先後旋轉的組合運算為$L(x) \circ R(x)$，很容易驗證有以下性質：

1. 封閉：對任意旋轉$g_1, g_2 \in G$, $g_1 \circ g_2 \in G$
2. 單位元：存在$e \in G$，使得$\forall g \in G, g \circ e = e \circ g = g$
3. 逆元：$\forall g \in G, \exists g^{-1} \in G, g \circ g^{-1} = g^{-1} \circ g = e$
4. 結合律：$\forall g_1, g_2, g_3 \in G, g_1 \circ (g_2 \circ g_3) = (g_1 \circ g_2) \circ g_3$

將這個旋轉變換群作用在單位圓上，就會發現經過任意變換後，圓保持不變，這時我們把這個群稱為「對稱群」，這是個十分重要的概念，回想一下洛倫茲變換滿足的矩陣式，事實上，洛倫茲變換對四維的閔可夫斯基度規確實構成了一個對稱群。

以上對旋轉的定義是模糊的，用更精確的矩陣表示這個群，有：

$$R(\theta) = \begin{pmatrix} cos\theta & -sin\theta \\ sin\theta & cos\theta \end{pmatrix}$$

這個定義被稱為$SO(2)$群，它不夠直觀，我們需要一個更本質的定義。驗證發現，所有模為1的復數，加上乘法構成了一個群，這被稱為$\mathcal{U}(1)$群，將上式改寫為：

$$R(\theta) = cos\theta + isin\theta = cos\theta \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + sin\theta \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$

它對$\mathcal{U}(1)$群裏的所有元素作用是和$SO(2)$等效的，可以說，兩個群是「同構」的。

擴展到三維，情況就復雜多了，我們可以看到，繞每一個軸都有與二維類似的旋轉矩陣，它們構成的$SO(3)$冗長，復雜又不夠優美，繼續我們剛剛的改寫，這次用四元數代替復數：

$$q = cos\theta + usin\theta,\ u = ai + bj + ck,\ det(q) = 1,\\ i = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, j = \begin{pmatrix} 0 & i \\ i & 0 \end{pmatrix}, k = \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix}$$

這下好看多了，要保證度規不變，我們定義$v = xi + yj + zk$，使得$v' = qvq^{-1}$。這樣，一個$S\mathcal{U}(2)$群就誕生了，神奇的事情發生了，我們來帶入一個例子：$x$軸單位向量繞$z$軸旋轉：

$$v' = R_z(\theta)vR_z(\theta)^{-1} \\ = \begin{pmatrix} cos\theta + isin\theta & 0 \\ 0 & cos\theta - isin\theta \end{pmatrix} \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} cos\theta - isin\theta & 0 \\ 0 & cos\theta + isin\theta \end{pmatrix} \\ = \begin{pmatrix} 0 & e^{i2\theta} \\ -e^{-2i\theta} & 0 \end{pmatrix}$$

多出來的倍數2是怎麽回事呢？這說明對於一個$SO(3)$的元素，有兩個$S\mathcal{U}(2)$元素與它對應，這時我們說$S\mathcal{U}(2)$「覆蓋」(double-cover)了$SO(3)$。當一個對稱群覆蓋了另一個時，我們在之後可以看到，它是更為本質的。

對於有限的變換，我們使用最基本的矩陣表示已經足夠，但如果涉及到連續的，無窮的變換——物理學大多是這樣的，我們就需要一種新形式：「李群」(Lie Group)。運用微積分裏對連續量的思考，我們相似地定義一個無限小量：

$$g(\epsilon) = I + \epsilon X$$

其中$I$是單位元，由此，任意變換都可以認為是無限小量的無限疊加：

$$h(\theta) = \lim_{N\to\infty}(I + \frac{\theta}{N}X)^{N} = e^{\theta X}$$

所有的群元素都由確定的生成元(Generator)$X$構成，因此對於一個李群，只需要確定其生成元和生成元的組合方式（我們一般稱其為交換算子）。這兩樣共同組成的代數結構，就是「李代數」(Lie Algebra)。滿足條件的$S\mathcal{U}(2)$李群的生成元組被稱為「泡利矩陣」(Pauli Matrices)，它們是：

$$\delta_1 = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix},\ \delta_2 = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix},\ \delta_3 = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

其他所有生成元可以被認為是它們的線性組合。

讀者讀到這裏肯定已經猜出來了，模為 1 的復數在幾何上表示是單位圓，模為 1 的四元數——同樣的，也是一個四維的球$S^3$！有一個優美的定理：每一個有限維李代數，都只有一個簡單連通的李群（流形）與之對應。如此，我們也可以把$SO(3)$看作是$S\mathcal{U}(2)$的上半部分。