public class Friends {

/*
1 slice - 8/-
2-3 slice - 7/-
>3 slice - 6/-

ross order = 3 slices
chandler order = 1 slice 
joey order = 4 slice
*/
    final integer ONLY_ONE_SLICE = 8;
    final integer UPTO_THREE_SLICE = 7;
    final integer MORE_THAN_THREE_SLICE = 6;
    
    public integer getBill(integer numberOfSlices){
        integer billAmount = numberOfSlices == 1? ONLY_ONE_SLICE*numberOfSlices:
        					 numberOfSlices <= 3? UPTO_THREE_SLICE*numberOfSlices :
        						MORE_THAN_THREE_SLICE*numberOfSlices;
        return billAmount;
    }

}