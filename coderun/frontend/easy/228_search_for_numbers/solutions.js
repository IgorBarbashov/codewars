module.exports = function(nums, k) {
    if (nums.length < 2) {
        return false;
    }

    const pairs = new Set().add(k - nums[0]);

    for (let i = 1; i < nums.length; i++) {
        if (pairs.has(nums[i])) {
            return true;
        }
        pairs.add(k - nums[i]);
    }

    return false;
}