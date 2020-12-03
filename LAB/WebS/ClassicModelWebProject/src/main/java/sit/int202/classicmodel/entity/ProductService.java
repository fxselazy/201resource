package sit.int202.classicmodel.entity;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import sit.int202.classicmodel.dbservice.DBConnectionUtility;

public class ProductService {
    private static final String FIND_SQL = 
	"SELECT * FROM products where productCode = ?";
    private static final String FIND_BY_NAME_SQL = 
	"SELECT * FROM products where productName like ? or productLine like ?";

    public static boolean save(Products product) {
  	return false;
    }

    public static boolean remove(Products product) {
 	return remove(product.getProductCode());
    }

    public static boolean remove(String productCode) {
 	return false;
    }

    public static Products find(String productCode) {
 	Products product = null;
 	PreparedStatement pstm = DBConnectionUtility.getStatement(FIND_SQL, 
			new String[]{productCode});
 	try {
     	ResultSet rs = pstm.executeQuery();
     	if (rs.next()) {
  		product = new Products();
  		relationalToObject(product, rs);
     	}
     	pstm.getConnection().close();
 	} catch (SQLException ex) {
     		System.out.println(ex);
 	}
 	return product;
    }

    private static void relationalToObject(Products product, ResultSet rs) throws SQLException {

	product.setProductCode(rs.getString("productCode"));
        product.setProductName(rs.getString("productName"));
        product.setProductLine((Productlines) rs.getObject("productLine"));
        product.setProductScale(rs.getString("productScale"));
        product.setProductVendor(rs.getString("productVendor"));
        product.setProductDescription(rs.getString("productDescription"));
        product.setQuantityInStock(rs.getShort("quantityInStock"));
        product.setBuyPrice(rs.getBigDecimal("buyPrice"));
        product.setMsrp(rs.getBigDecimal("msrp"));
    }

   public static List<Products> getProducts(String value) {
	 value = "%" + value + "%";
	 Products product = null;
	 List<Products> products = new LinkedList();
	 PreparedStatement pstm = DBConnectionUtility.getStatement(FIND_BY_NAME_SQL, new String[]{value, value});
	 try {
	     ResultSet rs = pstm.executeQuery();
	     while (rs.next()) {
	  	product = new Products();
	  	relationalToObject(product, rs);
	  	products.add(product);
     	     }
	     pstm.getConnection().close();
	 } catch (SQLException ex) {
	     System.out.println(ex);
	 }
	 return products;
    }
}
