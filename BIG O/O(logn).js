const array = [1, 2, 3, 4, 5, 6, 7, 8];
// FIND A NUMBER 1

/*
    Cut the array in half, and check in which half does 1 exists. So, first
    [1,2,3,4]

    Repeat the process of cutitng in half

    [1,2]

    Repeat the process of cutitng in half

    1 has been found


    This is for 8 items but if we have 1 million items we will cut the array in half and exclude 500k irrelevant items.

    Since, for 8 we did this process 3 times

    and we know 2^3 = 8
    in LOG;
    log(base 2) 8 = 3

    simplify;

    log(base 2) number of items = number of operations


    log(base 2) 1,073,741,824 = 31

    So, the real power: for 1073741824 we did just 31 operations.
*/
