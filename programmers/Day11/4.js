function solution(n) {
    let i = 1;
    let answer = 1;

    // answer에는 팩토리얼의 값을 할당, 조건이 충족될 때까지 1씩 증가
    while (i < n) {
        answer ++;
        i = i * answer;
    }

    // 곱한 값이 n보다 커졌을 때는, 그 전 팩토리얼이 값이니 answer - 1
    if (i > n) {
        return answer - 1;
    } else {
        return answer;
    }
}