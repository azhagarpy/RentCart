import json
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from django.contrib.auth import logout
from .serializers import*
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import  HttpResponse
from rest_framework.parsers import  FormParser,MultiPartParser


User = get_user_model()


class ObtainAuthTokenView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        print(username,password,"aaaaaaaaaaaaaaaaaaaaaaaaa")
        try:
            # Check if the user exists in the User model
            user = USER.objects.get(username=username)
        except:
            return Response({'error': 'Invalid credentials'})

        if user.password==password:
            refresh = RefreshToken.for_user(user)
            token = {
                'refresh': str(refresh)}
            return Response({'token': token})
        else:
            return Response({'error': 'Invalid credentials'})


class LogoutView(APIView):
    def post(self, request):
        # Perform any necessary actions for logout
        token = request.data.get('token')
        logout(request)
        return Response({'success': 'Logged out successfully'})


class ValidateTokenView(APIView):
    def post(self, request):
        # pass refresh token as {"token":"tokennnn"}
        token = request.data.get('token')

        try:
            refresh = RefreshToken(token)
            refresh.access_token.verify()
            user_id = refresh.access_token.payload.get('user_id')
            return Response({'valid': True,'user': user_id})
        except Exception:
            return Response({'valid': False})


# create a new user to  USER model

class UserCreateView(generics.ListCreateAPIView):
    queryset = USER.objects.all()
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser,FormParser]
# Reade,update,delete user from USER model

class UserRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = USER.objects.all()
    serializer_class = UserSerializer

class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductImageListCreateAPIView(generics.ListCreateAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer

class ProductImageRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer

class ReviewListCreateAPIView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class MessageListCreateApiView(generics.ListCreateAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessageSerializer

class MessageRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessageSerializer