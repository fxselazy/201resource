package sit.int202.classicmodel.entity;
public class TestProductService {
    public static void main(String[] args) {
 	System.out.println(ProductService.find("S10_4757"));
	 System.out.println("---------------");
	 for (Products product : ProductService.getProducts("Har")) {
	     System.out.println(product);
	 }
    }
}
