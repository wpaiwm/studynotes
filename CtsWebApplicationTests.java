package com.cts;



import com.cts.mapper.UserMapper;
import com.cts.model.pojo.User;
import com.cts.service.UserService;
import com.cts.utils.JedisUtil;
import com.cts.utils.common.JsonConvertUtil;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
@WebAppConfiguration
@SpringBootTest(classes=CtsWebApplication.class)
public class CtsWebApplicationTests {

    @Autowired
    UserService userService;
    @Autowired(required = false)
    UserMapper userMapper;
    @Autowired
    JedisUtil jedisUtil;

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext webApplicationContext;
    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    /**
     *
     * @throws Exception
     */
    @Test
    public void login() throws Exception {
        /*
         * 1、mockMvc.perform执行一个请求。
         * 2、MockMvcRequestBuilders.get("XXX")构造一个请求。
         * 3、ResultActions.param添加请求传值
         * 4、ResultActions.accept(MediaType.TEXT_HTML_VALUE))设置返回类型
         * 5、ResultActions.andExpect添加执行完成后的断言。
         * 6、ResultActions.andDo添加一个结果处理器，表示要对结果做点什么事情
         *   比如此处使用MockMvcResultHandlers.print()输出整个响应结果信息。
         * 7、ResultActions.andReturn表示执行完成后返回相应的结果。
         */
        User user = new User();
        user.setAccount("admin");
        user.setPassword("admin");
        String json = JsonConvertUtil.objectToJson(user);
        RequestBuilder request = MockMvcRequestBuilders.post("/login")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(json);

        MvcResult mvcResult = mockMvc.perform(request).andReturn();
        int status = mvcResult.getResponse().getStatus();
        System.out.println("返回状态码：" + status);
    }

    @Test
    public void jedisutiltest() {
        //jedisUtil.setObject("wp","hello");
      //  Object object=jedisUtil.getObject("wp");
        //System.out.println(object);
        //jedisUtil.setObject("wp1","hello",100);
     //   System.out.println(jedisUtil.ttl("wp"));
       // System.out.println(jedisUtil.exists("wp"));
        //jedisUtil.setJson("wp2","{\"wp\":\"hero\"}");
    //    System.out.println(jedisUtil.getJson("wp2"));
      //  System.out.println(jedisUtil.keysB("wp*"));
        //System.out.println(jedisUtil.keysB("wp"));

    }
    @Test
    public void jwtutiltest(){
      //  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXJyZW50VGltZU1pbGxpcyI6IjE1OTcyODM2NjQ3NjQiLCJleHAiOjE1OTcyODM5NjQsImFjY291bnQiOiJhZG1pbiJ9.C0dxIthfLVtpczjttfH2fDriAxCzkPcK-c5XenQRGX4
    }
    @Test
    @Transactional
    @Rollback(value = true)
    public void ser(){
        User user1 = new User();
        user1.setAccount("admin");
        User user = userService.selectOne(user1);
        System.out.println(user.toString());
    }
}
