export interface Issue {

issueDate:Date,
issueTo:string,
orderNumber:number,
dispatch:string,
prepareBy:string,
itemDescription:string,
estimatedValue:number,
emailAddress:string,






}


// @DateTimeFormat(pattern = "dd/MM/yyyy")
// private Date issuedate;
// private String  issueTo;
// private int orderNumber;
//  private String dispatch;
//  private String preparedBY;
// private String itemDescription;
// private int quantity;
// private int unitPrice;
// private int estimatedValue;
// private String emailAddress;
// private String name;
// private String type;
// // @Column(name = "profileImage", nullable = false, columnDefinition =
// // "BINARY(256)", length = 256)
// @Lob
// private byte[] profileImage;