---
title: 龐加萊群
---

我們最後要做的工作是，將抽象的對稱群，利用表示論的知識重新轉換到向量空間上。不言而喻，從抽象群到向量空間$V$的轉換必須符合群公理，在這一基礎上，一個非平凡的表示還必須「不可約」，即該表示保證了不存在一個封閉的$V$的子空間。由是利用舒爾引理：

對一個不可約表示$R$，每一個與所有生成元滿足交換律的線性算子$T$都是標量。

我們找到了$S\mathcal{U}(2)$的線性算子$J^2 = J_1^2 + J_2^2 + J_3^2 = 2$，其中只有$J_3$是對角化的：

$$J_3 = \begin{pmatrix} 1 & 0 & 0 \\\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}$$

將它們改寫成特征值表示：

$$J_2 = b(b, m) \\ J_3 = m(b, m)$$

定義兩個操作符：

$$J_\pm = J_1 \pm iJ_2$$

有趣的是，對任意的$J_3$進行這兩個操作符的運算，都會得到新的不同維度的$J_3$，因此它們也被稱為梯子操作符，根據$S\mathcal{U}(2)$群原本的條件列出方程，我們可以看到這些特征值的取值是離散的。

我們知道，所有使得閔可夫斯基度規不發生改變的變換被稱為洛倫茲變換，根據行列式和第一個元素的正負，它們可以被分為四類。用逆時矩陣$\Lambda_T$和逆空間矩陣$\Lambda_P$，我們將洛倫茲群歸為第一種的不同變換（讀者可以自行思考這兩個矩陣的表示）：

$$O(1, 3) = \{L_+^{\uparrow}, \Lambda_P L_+^{\uparrow}. \Lambda_T L_+^{\uparrow}, \Lambda_P \Lambda_T L_+^{\uparrow}\}$$

以上知識已經足夠我們得出洛倫茲群的李代數，篇幅限製，我們直接給出結果：容易驗證旋轉變換$S\mathcal{U}(2)$是滿足洛倫茲變換的條件的，另一「加速變換」(Boost)則通過閔可夫斯基度規的要求$\Lambda^T \eta \Lambda = \eta$得出，這兩個變換並不滿足生成元的交換條件，因此將它們合並為：

$$N^\pm_i = \frac{1}{2}(J_i \pm iK_i)$$

加速變換$K_i$和旋轉變換$J_i$之間的交換關系與旋轉變換本身是一樣的，所以洛倫茲群也覆蓋了$S\mathcal{U}(2)$群。對$N^+$和$N^-$分別賦值泡利矩陣（還記得它是$S\mathcal{U}(2)$的生成元嗎），我們得到了三種表示：

1. $(0 ,0)$表示，即零自旋表示，用來描述標量粒子，如希格斯玻色子。
2. $(\frac{1}{2}, 0) \oplus (0, \frac{1}{2})$表示，用來描述旋量粒子，如電子和誇克。
3. $(\frac{1}{2}, \frac{1}{2})$表示，用於描述向量粒子，如光子。

從變換的對稱性，我們窺見了自然精妙的設計，「自旋」這一基本量的不同，確確實實地描述了所有基本粒子。

最後，給洛倫茲群加上坐標尺度的「平移變換」(Translation)，我們得到了龐加萊群，這已經足夠描述光速不變原理下的所有物理定律。