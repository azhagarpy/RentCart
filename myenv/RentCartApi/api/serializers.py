from rest_framework import serializers
from.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = "__all__"
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = "__all__"
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Messages
        fields="__all__"